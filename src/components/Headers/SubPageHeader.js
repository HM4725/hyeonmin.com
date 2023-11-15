import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// custom components
import LazyBackground from "components/ui/LazyBackground";

function placeholderSrc(src) {
  const idx = src.lastIndexOf(".");
  return src.slice(0, idx) + "-placeholder" + src.slice(idx);
}

function SubPageHeader(props) {
  const { src, title, subtitle } = props;
  return (
    <>
      <div className="page-header page-header-small clear-filter" filter-color="blue">
        <LazyBackground
          className="page-header-image"
          src={src}
          placeholder={placeholderSrc(src)}
        />
        <div className="content-center">
          <Container>
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subtitle}</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SubPageHeader;
