import {Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactUs = () => {
    return (
        <Col className="footer-links links-hover">
            <h5 className="h5-footer">Contact Us</h5>
            <a href="mailto: support@sonsofthunder.com">
                <FontAwesomeIcon icon={faEnvelope} /> Email Support
            </a>
        </Col>
    );
};

export default ContactUs;