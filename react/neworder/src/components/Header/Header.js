import React from "react";
import {
    Collapse,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Input
} from 'reactstrap';
import "./Header.scss";
import Menu from '../Menu'





class Header extends React.Component {

    render() {
        var productFilters = {category: [], function: [], family: []};
        return (
            <Container fluid={true} id={"page-header"}>
                <Navbar>
                    <NavbarBrand id={"logo"} href="/">Grid Order Tool</NavbarBrand>

                        <Menu container={this.props.container} />


                </Navbar>
            </Container>
        )

    }
}

export default Header;