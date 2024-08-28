import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {

    const yearNow = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <nav className="text-center mt-3 mb-3">
                        <a href="#home" className="footer-link">Home</a>
                        <span style={{ marginLeft: 10, marginRight: 10 }}> | </span>
                        <a href="#aboutMe" className="footer-link">About Me</a>
                        <span style={{ marginLeft: 10, marginRight: 10 }}> | </span>
                        <a href="#projects" className="footer-link">Projects</a>
                        <span style={{ marginLeft: 10, marginRight: 10 }}> | </span>
                        <a href="#timeline" className="footer-link">Career Timeline</a>
                    </nav>
                </Row>
                <Row className="text-center">
                    <Col size={12}>
                        <p>{yearNow} - All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}