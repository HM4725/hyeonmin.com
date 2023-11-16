import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import ScrollTracker from "components/ui/ScrollTracker";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [trackerShow, setTrackerShow] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
        setTrackerShow(true);
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
        setTrackerShow(false);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <header className="fixed-top">
        <Navbar className={"mb-0 " + navbarColor} expand="lg" color="info">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/index" tag={Link}>
                HYEON MIN
              </NavbarBrand>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/profile" tag={Link}>
                    <i className="now-ui-icons users_single-02 mr-1"></i>
                    <p>PROFILE</p>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons files_single-copy-04 mr-1"></i>
                    <p>Article</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/article/aws" tag={Link}>
                      <i className="fab fa-aws mr-2"></i>
                      AWS
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons education_agenda-bookmark mr-1"></i>
                    <p>Education</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/education/python" tag={Link}>
                      <i className="fab fa-python mr-2"></i>
                      Python
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink
                    href="https://www.linkedin.com/in/2hm/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                    <p className="d-lg-none d-xl-none">LinkedIn</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/hm4725" target="_blank">
                    <i className="fab fa-github"></i>
                    <p className="d-lg-none d-xl-none">Github</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <ScrollTracker color="info" className={{ "d-none": !trackerShow }} />
      </header>
    </>
  );
}

export default IndexNavbar;
