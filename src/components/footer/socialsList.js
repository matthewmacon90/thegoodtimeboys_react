import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faDiscord, faYoutube  } from "@fortawesome/free-brands-svg-icons";

const SocialIcon = () => {
    return (
        <Col className="social-icons">
            <h5 className="h5-footer">Social Media</h5>
            <a target="_blank" href="http://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a target="_blank" href="https://discord.gg/HRUccyU3Th">
                <FontAwesomeIcon className="fa-inverse" icon={faDiscord} />
            </a>
            <a target="_blank" href="http://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </Col>
    );
};

export default SocialIcon;