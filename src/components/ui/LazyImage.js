import React from "react";

function LazyImage(props) {
  const imageLoader = new Image();
  const [src, setSrc] = React.useState(props.placeholder);
  const alt = props.alt || "undefined";
  const aspectRatio = props.aspectRatio || "16/9";

  imageLoader.src = props.src;
  imageLoader.onload = () => {
    setSrc(props.src);
  };

  return (
    <img {...props} width="100%" alt={alt} src={src} style={{ aspectRatio }} />
  );
}

export default LazyImage;
