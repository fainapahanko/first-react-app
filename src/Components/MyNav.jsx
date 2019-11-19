import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../style.css';

class MyNav extends React.Component {
    state = {}
    render(){
        return(
            <div>
                <Nav className="navbar justify-content-start py-2 px-5">
                    <NavItem className="nav-item">
                        <NavLink className="nav-link" href="#">Link1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" href="#">Link2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" href="#">Link3</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default MyNav;