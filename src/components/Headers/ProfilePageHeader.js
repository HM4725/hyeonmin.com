import React from "react";

// reactstrap components
import { Container, UncontrolledTooltip } from "reactstrap";

// custom components
import LazyBackground from "components/ui/LazyBackground";

function ProfilePageHeader() {
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <LazyBackground
          className="page-header-image"
          src="https://data.hyeonmin.com/img/bg-profile.jpg"
          placeholder="https://data.hyeonmin.com/img/bg-profile-placeholder.jpg"
        />
        <Container>
          <div className="photo-container">
            <img alt="..." src="https://data.hyeonmin.com/img/profile-1x1.jpg"></img>
          </div>
          <h3 className="title">Hyeonmin Lee</h3>
          <p className="category">software architect / educator</p>
          <div className="content">
            <div className="social-description" id="tooltip-gpa">
              <h2>4.02</h2>
              <p>GPA</p>
            </div>
            <UncontrolledTooltip delay={0} target="tooltip-gpa">
              Graduation GPA out of 4.5
            </UncontrolledTooltip>
            <div className="social-description" id="tooltip-career">
              <h2>4</h2>
              <p>Career</p>
            </div>
            <UncontrolledTooltip delay={0} target="tooltip-career">
              Years of Work Experience
            </UncontrolledTooltip>
            <div className="social-description" id="tooltip-awards">
              <h2>2</h2>
              <p>Awards</p>
            </div>
            <UncontrolledTooltip delay={0} target="tooltip-awards">
              Honors and Awards
            </UncontrolledTooltip>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
