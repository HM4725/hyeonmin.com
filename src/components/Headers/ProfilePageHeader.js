import React from "react";

// reactstrap components
import { Container, UncontrolledTooltip } from "reactstrap";

// custom components
import LazyBackground from "components/ui/LazyBackground";

// json
import awards from "../../assets/json/awards.json"
import projects from "../../assets/json/projects.json"

function ProfilePageHeader() {
  const email = "4725hmc@gmail.com";
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
          <address className="domain">Contact: <a href={"mailto:" + email}>{email}</a></address>
          <div className="content">
            <div className="social-description" id="tooltip-gpa">
              <h2>4.02</h2>
              <p>GPA</p>
            </div>
            <UncontrolledTooltip delay={0} target="tooltip-gpa">
              Graduation GPA out of 4.5
            </UncontrolledTooltip>
            <div className="social-description" id="tooltip-career">
              <h2>{projects.length}</h2>
              <p>Projects</p>
            </div>
            <UncontrolledTooltip delay={0} target="tooltip-career">
              Software Related Projects
            </UncontrolledTooltip>
            <div className="social-description" id="tooltip-awards">
              <h2>{awards.length}</h2>
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
