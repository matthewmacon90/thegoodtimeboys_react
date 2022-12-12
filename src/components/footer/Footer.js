import { Container, Row } from "reactstrap";
import '../Styles.css';
import SocialIcon from "./SocialsList";
import LinksList from "./LinksList";
import ContactUs from "./ContactUs";
import Subscribe from "./Subscribe";
import Copyright from "./CopyRight";

//Footer is not sticking to the bottom of the page on certain screen sizes, check into this.

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