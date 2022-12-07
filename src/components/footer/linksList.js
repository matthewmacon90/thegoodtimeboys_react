import { Col, Row } from "reactstrap";

const LinksList = () => {
    return (
        <Col className="footer-links links-hover">
            <h5 className="h5-footer">Links</h5>
            <a target='_blank' href="https://www.google.com">Google</a>
            <Row><a target='_blank' href="https://www.google.com">test1</a></Row>
            <a target='_blank' href="https://www.google.com">test2</a>
        </Col>
    );
};

export default LinksList;

