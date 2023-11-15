/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// custom components
import LazyBackground from "components/ui/LazyBackground";

function IndexHeader() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <LazyBackground
          className="page-header-image"
          src="https://data.hyeonmin.com/img/bg-home.jpg"
          placeholder="https://data.hyeonmin.com/img/bg-home-placeholder.jpg"
        />
        <Container>
          <div className="content-center brand">
            <img
              alt="hyeonmin-logo"
              className="n-logo"
              src="https://data.hyeonmin.com/img/hyeonmin-logo.png"
            ></img>
            <h1 className="h1-seo">HOME</h1>
            <h3 className="h3 font-weight-300">All we need is a reason.</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
