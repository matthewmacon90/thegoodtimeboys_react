import { useState } from "react";
import { 
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavbarToggler
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNewspaper, faUsers, faAddressCard  } from "@fortawesome/free-solid-svg-icons";

const HeaderLinks = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark sticky='top' expand='md'>
            <Link className="title-header title-hover" to='/'><h1 className=''>The Sons of Thunder</h1></Link>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto nav-link social-icons-header' navbar>
                    <NavItem>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/directory'>
                            <FontAwesomeIcon icon={faNewspaper} /> News
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/about'>
                            <FontAwesomeIcon icon={faUsers} /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/contact'>
                            <FontAwesomeIcon icon={faAddressCard} /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
    </Navbar>
    );
};

export default HeaderLinks;