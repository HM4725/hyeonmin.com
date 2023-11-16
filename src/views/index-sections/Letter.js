import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Container,
  Row,
} from "reactstrap";

// custom components
import Aos from "aos";
import "aos/dist/aos.css";

function Letter() {
  React.useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card
              className="card-signup"
              data-background-color="black"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <CardHeader className="m-2 p-2">
                <CardText tag="h5">To. 이 편지를 보는 당신</CardText>
              </CardHeader>
              <CardBody>
                <CardText
                  style={{ textIndent: ".5em" }}
                  className="my-1 keep-word"
                >
                  현대인들은 컴퓨터 없이는 살 수 없는 바보가 되었습니다. 어릴 적
                  컴퓨터를 멀리하라 했었던 어른들도 지금은 매일 스마트폰에
                  의존적인 삶을 살고 있습니다. 매일 밤 우리는 유튜브 쇼츠,
                  인스타그램 릴스 그리고 틱톡 숏폼과 같은 슬롯머신 앞에서 도박을
                  하고 있습니다.
                </CardText>
                <CardText
                  style={{ textIndent: ".5em" }}
                  className="mb-1 keep-word"
                >
                  저는 이런 <strong>디지털 카지노</strong>에서 벗어나고 싶은
                  개발자입니다. 소프트웨어를 만들지만, 사람들을 컴퓨터 중독자로
                  만들고 싶지는 않습니다. 그렇다면 우리는 어떻게 해야 주체적인
                  삶을 영위할 수 있을까요? 저는 늘 이 질문에 대한 답을 고민하고
                  있습니다. 당신도 저와 함께 이 고민을 해주셨으면 좋겠습니다.
                </CardText>
              </CardBody>
              <CardFooter className="text-right m-2 p-2">
                <CardText tag="h5">From. 이현민</CardText>
              </CardFooter>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Letter;
