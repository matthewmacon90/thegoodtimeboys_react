import { Container, Row } from "reactstrap";
import '../Styles.css';
import SocialIcon from "./socialsList";
import LinksList from "./linksList";
import ContactUs from "./contactUs";
import Subscribe from "./subscribe";
import Copyright from "./copyRight";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row className="row-social">
                    <LinksList />
                    <SocialIcon />
                    <ContactUs />
                    <Subscribe />
                    <Copyright />
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;