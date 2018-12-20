/*
* Renders the header, which includes the Logo and Grid Controls
 */
import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';




export default class Header extends React.Component {

    render() {

        return (
            <div id={"page-header"} className={"navbar navbar-dark bg-dark shadow-sm"}>
            <Container >
                <Navbar color="dark" dark>
                    <NavbarBrand className={"navbar-brand d-flex align-items-center"} id={"logo"} href="/">

                        <strong>Grid Order App</strong>
                    </NavbarBrand>

                </Navbar>
            </Container>
            </div>
        )

    }
}

