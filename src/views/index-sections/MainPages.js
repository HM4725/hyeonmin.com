import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from "reactstrap";

// custom components
import LazyImage from "components/ui/LazyImage";
import Aos from "aos";
import "aos/dist/aos.css";

function MainPages() {
  const pages = [
    {
      title: "Profile",
      description: "저에 대해 소개드리겠습니다.",
      src: "https://data.hyeonmin.com/img/page-profile.png",
      placeholder: "https://data.hyeonmin.com/img/page-profile-placeholder.png",
      url: "/profile",
    },
    {
      title: "Article",
      description: "컴퓨터 관련 주제로 저의 생각을 적어보았습니다.",
      src: "https://data.hyeonmin.com/img/page-article.png",
      placeholder: "https://data.hyeonmin.com/img/page-article-placeholder.png",
      url: "/article/aws",
    },
    {
      title: "Education",
      description: "저의 교육 철학을 바탕으로 수업을 준비해보았습니다.",
      src: "https://data.hyeonmin.com/img/page-education.png",
      placeholder:
        "https://data.hyeonmin.com/img/page-education-placeholder.png",
      url: "/education/python",
    },
  ];

  React.useEffect(() => {
    Aos.init();
  });

  return (
    <section className="section section-full-screen d-flex align-items-center">
      <Container className="mt-4" data-aos="fade-up" data-aos-duration="1000">
        <Row>
          <Col>
            <h3 className="title text-center">Index</h3>
          </Col>
        </Row>
        <Row>
          {pages.map((page, idx) => (
            <Col key={idx} md="4">
              <Card>
                <LazyImage
                  alt={page.title}
                  aspectRatio="55/36"
                  src={page.src}
                  placeholder={page.placeholder}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {page.title} <Badge color="primary">new</Badge>
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {page.description}
                  </CardSubtitle>
                  <Button block to={page.url} tag={Link}>
                    이동 <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MainPages;
