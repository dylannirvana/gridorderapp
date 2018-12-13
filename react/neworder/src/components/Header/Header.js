/*
* Renders the header, which includes the Logo and Grid Controls
 */
import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';

import GridControls from '../GridControls'


export default class Header extends React.Component {

    render() {

        return (
            <Container fluid={true} id={"page-header"}>
                <Navbar>
                    <NavbarBrand id={"logo"} href="/">Grid Order Tool</NavbarBrand>

                    {/*Render the controls for controlling the product grid*/}
                    <GridControls container={this.props.container}/>


                </Navbar>
            </Container>
        )

    }
}

