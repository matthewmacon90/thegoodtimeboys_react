import { Col, Nav, NavItem} from "reactstrap";

const LinksList = () => {
    return (
        <Col className="footer-links links-hover">
            <h5 className="h5-footer">Links</h5>
            <Nav vertical>
                <NavItem>
                    <a target='_blank' href="https://www.google.com">Google</a> 
                </NavItem>
                <NavItem>
                    <a target='_blank' href="https://www.google.com">Test1</a> 
                </NavItem>
                <NavItem>
                    <a target='_blank' href="https://www.google.com">Test2</a>
                </NavItem>
            </Nav>
        </Col>
    );
};

export default LinksList;

