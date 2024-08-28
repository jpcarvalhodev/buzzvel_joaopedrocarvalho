import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Developer", "Back-End Developer", "Video Editor"];
  const period = 2000;
  const [visibilityClass, setVisibilityClass] = useState('fade-out');

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, index])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => {
                setTimeout(() => {
                  setVisibilityClass(isVisible ? 'fade-in' : 'fade-out');
                }, 0);
                return (
                  <div className={`animate__animated ${visibilityClass}`}>
                    <span className="tagline">Welcome to my Test</span>
                    <h1>Hello, <br></br>I'm João Pedro!</h1>
                    <h2 className="txt-rotate" data-period="1000" data-rotate='["Front-End Developer", "Back-End Developer", "Video Editor"]'><span className="wrap">{text}</span></h2>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}