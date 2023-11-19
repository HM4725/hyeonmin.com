import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Badge,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

// custom components
import Aos from "aos";
import "aos/dist/aos.css";

// JSON
import career from "../assets/json/career.json";
import projects from "../assets/json/projects.json";
import outsourcing from "../assets/json/outsourcing.json";
import awards from "../assets/json/awards.json";

function ProfilePage() {
  const [modal, setModal] = React.useState(false);
  const [modalImageSrc, setModalImageSrc] = React.useState("");

  const toggleAwardModal = (idx) => {
    modal || setModalImageSrc(awards[idx].imageSrc);
    setModal(!modal);
  };

  React.useEffect(() => {
    Aos.init();
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div
          className="section"
          style={{ zIndex: 4, maxWidth: 880, margin: "auto" }}
        >
          <Container>
            <div className="button-container">
              <Button
                className="btn-round mr-1"
                color="info"
                size="lg"
                href="https://careers.hyeonmin.com/v3/resume.pdf"
                target="_blank"
              >
                Resume
              </Button>
              <Button
                className="btn-round ml-1"
                color="info"
                size="lg"
                href="https://careers.hyeonmin.com/v3/portfolio.pdf"
                target="_blank"
              >
                Portfolio
              </Button>
            </div>

            <Card
              id="introduction"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="elevation-0 my-4"
            >
              <CardBody>
                <CardTitle tag="h3" className="text-center font-weight-bold">
                  <sup className="mr-2">
                    <i className="fas fa-hashtag"></i>
                  </sup>
                  자기소개
                </CardTitle>
                <CardText className="keep-word font-weight-normal">
                  저는 확장성 있는 시스템을 추구하는 소프트웨어 아키텍트입니다.
                  여러 팀에서 소프트웨어의 아키텍처를 설계하며 큰 그림을 그리는
                  역할을 주로 담당했습니다. 소프트웨어 제품의 성능과 개발의
                  속도의 트레이드 오프 관계를 고려하며, 효율적인 개발 프로세스를
                  디자인하고 제품을 개발하는 것이 저의 목표입니다.
                </CardText>
              </CardBody>
            </Card>

            <Card
              id="education"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="elevation-0 my-4"
            >
              <CardBody>
                <CardTitle tag="h3" className="text-center font-weight-bold">
                  <sup className="mr-2">
                    <i className="fas fa-hashtag"></i>
                  </sup>
                  학력
                </CardTitle>

                <Row>
                  <Col xs="auto">
                    <Button
                      className="btn-round btn-icon"
                      href="https://www.hanyang.ac.kr/"
                      target="_blank"
                    >
                      <img
                        alt="hanyang-uni-logo"
                        src="https://data.hyeonmin.com/img/hanyang-uni-logo.jpeg"
                      />
                    </Button>
                  </Col>
                  <Col className="px-0">
                    <small>2017.03 ~ 2024.02</small>
                    <CardSubtitle tag="h4">한양대학교</CardSubtitle>
                  </Col>
                </Row>
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row" width={80} className="font-weight-normal">
                        전공
                      </th>
                      <td>컴퓨터소프트웨어학부</td>
                    </tr>
                    <tr>
                      <th scope="row" width={80} className="font-weight-normal">
                        평점
                      </th>
                      <td>4.02 / 4.5</td>
                    </tr>
                    <tr>
                      <th scope="row" width={80} className="font-weight-normal">
                        교과과정
                      </th>
                      <td className="keep-word">
                        병렬프로그래밍, 분산컴퓨팅, 운영체제,
                        데이터베이스시스템및응용, 컴퓨터구조론
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

            <Card
              id="career"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="elevation-0 my-4"
            >
              <CardBody>
                <CardTitle tag="h3" className="text-center font-weight-bold">
                  <sup className="mr-2">
                    <i className="fas fa-hashtag"></i>
                  </sup>
                  경력사항{" "}
                  <Badge color="default" pill>
                    {career.length}
                  </Badge>
                </CardTitle>
                {career.map((job, idx) => (
                  <article key={idx} className="mb-4">
                    <Row>
                      <Col xs="auto">
                        <Button
                          className="btn-round btn-icon"
                          href={job.link}
                          target="_blank"
                        >
                          <img alt={`${job.company}_로고`} src={job.logoSrc} />
                        </Button>
                      </Col>
                      <Col className="px-0">
                        <small>{job.period}</small>
                        <CardSubtitle tag="h4">{job.company}</CardSubtitle>
                      </Col>
                    </Row>
                    <Table>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            담당
                          </th>
                          <td>{job.incharge}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            역할
                          </th>
                          <td className="keep-word">
                            <ul>
                              {job.role.map((r, idx) => (
                                <li key={idx}>- {r}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            사용기술
                          </th>
                          <td className="keep-word">{job.skillset}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </article>
                ))}
              </CardBody>
            </Card>

            <Card
              id="project"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="elevation-0 my-4"
            >
              <CardBody>
                <CardTitle tag="h3" className="text-center font-weight-bold">
                  <sup className="mr-2">
                    <i className="fas fa-hashtag"></i>
                  </sup>
                  프로젝트{" "}
                  <Badge color="default" pill>
                    {projects.length}
                  </Badge>
                </CardTitle>
                {projects.map((project, idx) => (
                  <article key={idx} className="mb-4">
                    <Row>
                      <Col xs="auto">
                        <Button
                          className="btn-round btn-icon"
                          href={project.link}
                          target="_blank"
                        >
                          <img alt="프로젝트_로고" src={project.logoSrc} />
                        </Button>
                      </Col>
                      <Col className="px-0">
                        <small>{project.period}</small>
                        <CardSubtitle tag="h4">{project.title}</CardSubtitle>
                      </Col>
                    </Row>
                    <Table>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            주관
                          </th>
                          <td>{project.host}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            설명
                          </th>
                          <td className="keep-word">{project.description}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            사용기술
                          </th>
                          <td className="keep-word">{project.skillset}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </article>
                ))}
              </CardBody>
            </Card>

            <Card
              id="outsourcing"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="elevation-0 my-4"
            >
              <CardBody>
                <CardTitle tag="h3" className="text-center font-weight-bold">
                  <sup className="mr-2">
                    <i className="fas fa-hashtag"></i>
                  </sup>
                  외주{" "}
                  <Badge color="default" pill>
                    {outsourcing.length}
                  </Badge>
                </CardTitle>
                {outsourcing.map((job, idx) => (
                  <article key={idx} className="mb-4">
                    <Row>
                      <Col xs="auto">
                        <Button
                          className="btn-round btn-icon"
                          href={job.link}
                          target="_blank"
                        >
                          <img alt={`${job.company}_로고`} src={job.logoSrc} />
                        </Button>
                      </Col>
                      <Col className="px-0">
                        <small>{job.period}</small>
                        <CardSubtitle tag="h4">{job.title}</CardSubtitle>
                      </Col>
                    </Row>
                    <Table>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            요청
                          </th>
                          <td>{job.company}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            담당
                          </th>
                          <td>{job.incharge}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            역할
                          </th>
                          <td className="keep-word">
                            <ul>
                              {job.role.map((r, idx) => (
                                <li key={idx}>- {r}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            사용기술
                          </th>
                          <td className="keep-word">{job.skillset}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </article>
                ))}
              </CardBody>
            </Card>

            <Card
              id="award"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="elevation-0 my-4"
            >
              <CardBody>
                <CardTitle tag="h3" className="text-center font-weight-bold">
                  <sup className="mr-2">
                    <i className="fas fa-hashtag"></i>
                  </sup>
                  수상경력{" "}
                  <Badge color="default" pill>
                    {awards.length}
                  </Badge>
                </CardTitle>
                {awards.map((award, idx) => (
                  <article key={idx} className="mb-4">
                    <Row>
                      <Col xs="auto">
                        <Button
                          className="btn-round btn-icon"
                          onClick={(e) => {
                            toggleAwardModal(idx);
                          }}
                        >
                          <img alt="프로젝트_로고" src={award.logoSrc} />
                        </Button>
                      </Col>
                      <Col className="px-0">
                        <small>{award.date}</small>
                        <CardSubtitle tag="h4">{award.title}</CardSubtitle>
                      </Col>
                    </Row>
                    <Table>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            수상
                          </th>
                          <td>{award.rank}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            주관
                          </th>
                          <td>{award.host}</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            width={80}
                            className="font-weight-normal"
                          >
                            아이템
                          </th>
                          <td>{award.item}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </article>
                ))}
              </CardBody>
            </Card>

            <Modal
              isOpen={modal}
              toggle={() => {
                toggleAwardModal(0);
              }}
            >
              <ModalHeader
                toggle={() => {
                  toggleAwardModal(0);
                }}
              >
                수상경력 상장
              </ModalHeader>
              <ModalBody>
                <img alt="award" src={modalImageSrc}></img>
              </ModalBody>
            </Modal>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
