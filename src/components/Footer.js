import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row><h5>Social</h5></Row>
                <Row>email</Row>
                <Row>summary</Row>
                <Row>links</Row>
                <Row>copyright</Row>
            </Container>
        </footer>
    );
};

export default Footer;