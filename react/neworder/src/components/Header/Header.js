import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';

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