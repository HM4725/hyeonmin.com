import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";

function ScrollTracker(props) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const pageHeight = document.body.scrollHeight;
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollY(scrolled);
    };
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Progress
      {...props}
      value={scrollY}
      style={{
        height: "3px",
      }}
    />
  );
}

export default ScrollTracker;
