
import React, { Component } from 'react'
import {
    Collapse,
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
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductUpload from './components/ProductUpload'

// This is the layout
// Probably a good idea to display the imput and intro to upload
// and once that is completed, remove the upload, and show the grid

class App extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand href="/">Grid Order Tool</NavbarBrand>
                    <NavbarToggler  />
                    <Collapse >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Hello Colleen!</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/dylannirvana/gridorder">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Import</h1>                    
                                    <ProductUpload />                          
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>The Grid</h1>  
                                {/* {itemList.map(item => <ProductGrid someValue={item} />)}  */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
    export default App;
