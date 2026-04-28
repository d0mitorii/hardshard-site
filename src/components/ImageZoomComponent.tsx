import React, { useEffect, useRef } from "react";
import mediumZoom from "medium-zoom";

interface ImageZoomProps {
  src: string;
  srcThumb?: string;
  alt: string;
  marginBottom?: string;
  description?: string;
  maxHeight?: string;
}

export function ImageZoom(props: ImageZoomProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const thumbSrc = props.srcThumb || props.src;

  useEffect(() => {
    if (!imgRef.current) return;

    const zoom = mediumZoom(imgRef.current, {
      background: "var(--ifm-background-color)",
    });

    return () => {
      zoom.detach();
    };
  }, []);

  return (
    <>
      <div
        className="imageContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom:
            props.marginBottom || props.description
              ? props.marginBottom
              : "1.25rem",
        }}
      >
        <img
          ref={imgRef}
          src={thumbSrc}
          data-zoom-src={props.src}
          alt={props.alt}
          style={{
            maxHeight: props.maxHeight || "100%",
            cursor: "zoom-in",
          }}
        />
      </div>
      {props.description && (
        <p className="text--center text--italic">{props.description}</p>
      )}
    </>
  );
}