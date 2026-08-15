import React, { useEffect, useRef, useState, useCallback } from "react";
import mediumZoom, { Zoom } from "medium-zoom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import styles from "./ImageCarousel.module.css";

interface CarouselImage {
  src: string;
  srcThumb?: string;
  alt: string;
  description?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  marginBottom?: string;
  maxHeight?: string;
}

export function ImageCarousel({
  images,
  marginBottom,
  maxHeight,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const zoomRef = useRef<Zoom | null>(null);

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const containerWidth = useRef(1);

  useEffect(() => {
    const els = imgRefs.current.filter(Boolean) as HTMLImageElement[];
    if (els.length === 0) return;

    zoomRef.current = mediumZoom(els, {
      background: "var(--ifm-background-color)",
    });

    return () => {
      zoomRef.current?.detach();
    };
  }, [images.length]);

  const goPrev = useCallback(
    () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length],
  );
  const goNext = useCallback(
    () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    containerWidth.current = containerRef.current?.clientWidth || 1;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    setDragOffset(touchDeltaX.current);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const threshold = containerWidth.current * 0.15;
    if (touchDeltaX.current > threshold) goPrev();
    else if (touchDeltaX.current < -threshold) goNext();
    setDragOffset(0);
    touchDeltaX.current = 0;
  };

  if (images.length === 0) return null;

  const N = images.length;
  const translatePercent =
    -index * 100 + (dragOffset / containerWidth.current) * 100;

  return (
    <div>
      <div
        ref={containerRef}
        className={styles.carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {N > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Предыдущее изображение"
              className={clsx(styles.arrowButton, styles.arrowButtonLeft)}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              aria-label="Следующее изображение"
              className={clsx(styles.arrowButton, styles.arrowButtonRight)}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div
          className={styles.track}
          style={{
            width: `${N * 100}%`,
            transform: `translateX(${translatePercent / N}%)`,
            transition: isDragging ? "none" : "transform 0.35s ease",
            touchAction: "pan-y",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={styles.slide}
              style={{ width: `${100 / N}%` }}
            >
              <img
                ref={(el) => (imgRefs.current[i] = el)}
                src={img.srcThumb || img.src}
                data-zoom-src={img.src}
                alt={img.alt}
                loading="eager"
                draggable={false}
                className={styles.image}
                style={{
                  maxHeight: maxHeight || "100%",
                  pointerEvents: isDragging ? "none" : "auto",
                  zIndex: "3",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {images[index].description && (
        <p
          className={clsx("text--center", "text--italic", styles.description)}
          style={{ marginBottom: marginBottom || "1.25rem" }}
        >
          {images[index].description}
        </p>
      )}

      {N > 1 && (
        <div className={styles.dotsContainer}>
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              role="button"
              aria-label={`Слайд ${i + 1}`}
              className={clsx(styles.dot, i === index && styles.dotActive)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
