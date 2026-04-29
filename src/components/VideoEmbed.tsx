import React from "react";

type VideoEmbedProps = {
  src: string;
  title?: string;
  aspectRatio?: string; // "16:9", "4:3", etc
};

const getPadding = (ratio: string) => {
  const [w, h] = ratio.split(":").map(Number);
  return `${(h / w) * 100}%`;
};

const normalizeYouTubeUrl = (url: string) => {
  try {
    const u = new URL(url);

    // /embed?v= → /embed/{id}
    if (u.pathname === "/embed" && u.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }

    // youtube.com/watch?v=
    if (u.pathname === "/watch" && u.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }

    // youtu.be/ID
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }

    return url;
  } catch {
    return url;
  }
};

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  src,
  title = "Embedded video",
  aspectRatio = "16:9",
}) => {
  const paddingBottom = getPadding(aspectRatio);
  const finalSrc = normalizeYouTubeUrl(src);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom,
        height: 0,
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      <iframe
        src={finalSrc}
        title={title}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default VideoEmbed;
