import React from "react";

// reactstrap components
import { Container, Table, Button } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import SubPageHeader from "components/Headers/SubPageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

// JSON
import classes from "../../assets/json/education/python.json";

function PythonPage() {
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
          title="Education"
          subtitle="Python"
          src="https://data.hyeonmin.com/img/bg-education.jpg"
        />
        <div className="section">
          <Container>
            <h4>수업 자료</h4>
            <Table hover className="text-center">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">챕터</th>
                  <th scope="col">제목</th>
                  <th scope="col">강의 자료</th>
                  <th scope="col" className="d-none d-lg-table-cell">
                    소스 코드
                  </th>
                  <th scope="col" className="d-none d-lg-table-cell">
                    업로드 일자
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls) => (
                  <tr key={cls.chapter}>
                    <th className="align-middle" scope="row">
                      {cls.chapter}
                    </th>
                    <td className="align-middle">{cls.title}</td>
                    <td className="align-middle">
                      {cls.pdf.length > 0 ? (
                        <Button
                          className="d-inline-flex align-items-center"
                          size="sm"
                          href={cls.pdf}
                          target="_blank"
                          disabled={cls.pdf.length === 0}
                        >
                          <span className="d-none d-sm-inline mr-1">
                            download
                          </span>
                          <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                        </Button>
                      ) : (
                        <a
                          href="/dummy-link/jsx-a11y/anchor-is-valid"
                          class="btn btn-secondary btn-sm disabled"
                          role="button"
                          aria-disabled="true"
                        >
                          <span className="d-none d-sm-inline mr-1">
                            download
                          </span>
                          <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                        </a>
                      )}
                    </td>
                    <td className="align-middle d-none d-lg-table-cell">
                      {cls.code.length > 0 ? (
                        <Button
                          className="d-inline-flex align-items-center"
                          size="sm"
                          href={cls.code}
                          target="_blank"
                          disabled={cls.code.length === 0}
                        >
                          <span className="d-none d-sm-inline mr-1">
                            download
                          </span>
                          <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                        </Button>
                      ) : (
                        <a
                          href="/dummy-link/jsx-a11y/anchor-is-valid"
                          class="btn btn-secondary btn-sm disabled"
                          role="button"
                          aria-disabled="true"
                        >
                          <span className="d-none d-sm-inline mr-1">
                            download
                          </span>
                          <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                        </a>
                      )}
                    </td>
                    <td className="align-middle d-none d-lg-table-cell">
                      {cls.uploaded}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default PythonPage;
