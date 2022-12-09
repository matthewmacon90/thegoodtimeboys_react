import {Col, Nav, NavItem} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactUs = () => {
    return (
        <Col className="footer-links links-hover">
            <h5 className="h5-footer">Contact Us</h5>
            <Nav vertical>
                <NavItem>
                    <a href="mailto: support@sonsofthunder.com">
                        <FontAwesomeIcon icon={faEnvelope} /> Email Support
                    </a>
                </NavItem>
            </Nav>
        </Col>
    );
};

export default ContactUs;