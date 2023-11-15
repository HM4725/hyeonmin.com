import React from "react";

function loadDivBackgroundLazy(ref, src) {
  const imageLoader = new Image();
  imageLoader.src = src;
  imageLoader.onload = () => {
    ref.current.style.backgroundImage = `url(${src})`;
  };
}

function LazyBackground(props) {
  let div = React.createRef();

  loadDivBackgroundLazy(div, props.src);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.scrollY / 3;
        div.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("touchmove", updateScroll);
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("touchmove", updateScroll);
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div
      {...props}
      className={"smooth-image-transition " + props.className}
      style={{
        backgroundImage: `url(${props.placeholder || props.src})`,
      }}
      ref={div}
    />
  );
}

export default LazyBackground;
