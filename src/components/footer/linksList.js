import { Col, Nav, NavItem} from "reactstrap";
import { Link } from "react-router-dom";

const LinksList = () => {
    return (
        <Col className="footer-links links-hover">
            <h5 className="h5-footer">Links</h5>
            <Nav vertical>
                <NavItem>
                    <Link to='/'>Home</Link>
                </NavItem>
                <NavItem>
                    <Link to='/directory'>News</Link>
                </NavItem>
                <NavItem>
                    <Link to='/about'>About</Link>
                </NavItem>
                <NavItem>
                    <Link to='/contact'>Contact</Link>
                </NavItem>
            </Nav>
        </Col>
    );
};

export default LinksList;

//Look into adding all the links as a NavLink and changing styling to fit as it is now.