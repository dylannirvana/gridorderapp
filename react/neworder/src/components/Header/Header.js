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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="mr-2">
                            <path
                                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                            <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                        <strong>Grid Order App</strong>
                    </NavbarBrand>

                </Navbar>
            </Container>
            </div>
        )

    }
}

