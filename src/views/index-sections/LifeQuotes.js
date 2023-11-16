import React from "react";
// reactstrap components
import { Container } from "reactstrap";

// custom components
import Aos from "aos";
import "aos/dist/aos.css";

function LifeQuotes() {
  React.useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <blockquote
            className="blockquote text-center mx-auto"
            style={{ maxWidth: 700 }}
          >
            <p className="mb-0 keep-word">
              당신이 배를 만들고 싶다면, 사람들에게 목재를 가져오게 하고 일을
              지시하고 일감을 나눠주는 일을 하지 말라. 대신 그들에게 저 넓고
              끝없는 바다에 대한 동경심을 키워줘라.
            </p>
            <footer class="blockquote-footer">
              <cite title="Source Title">앙투안 드 생텍쥐페리</cite>
            </footer>
          </blockquote>
        </Container>
      </div>
    </>
  );
}

export default LifeQuotes;
