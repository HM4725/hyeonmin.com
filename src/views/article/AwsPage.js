import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import SubPageHeader from "components/Headers/SubPageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ArticleAwsPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("sidebar-collapse");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <SubPageHeader
          title="Article"
          subtitle="Amazon Web Services"
          src="https://data.hyeonmin.com/img/bg-engineering.jpg"
        />
        <div className="section">
          <Container>
            <div className="section">
              <h4 className="title text-center">About AWS</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ArticleAwsPage;
