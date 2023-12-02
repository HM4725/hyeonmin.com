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
        <Container className="text-center">
          <blockquote
            className="blockquote text-center mx-auto"
            style={{ maxWidth: 760 }}
          >
            <p className="mb-0 keep-word">
              God, grant me the <strong>Serenity</strong> to accept the things I
              cannot change, <br />
              <strong>Courage</strong> to change the things I can, and the{" "}
              <strong>Wisdom</strong> to know the difference.
            </p>
            <footer class="blockquote-footer">
              <cite title="Source Title">Sernity Prayer</cite>
            </footer>
          </blockquote>
        </Container>
      </div>
    </>
  );
}

export default LifeQuotes;
