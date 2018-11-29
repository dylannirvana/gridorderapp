import React, { Component } from 'react';
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
import ProductImport from './components/ProductImport';
import FileUploader from './components/FileUploader/FileUploader';
import ProductGrid from './components/ProductGrid';

import Papa from 'papaparse';
class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            feed: {}
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    uploadFile = (event) => {
        const inventory = event.target.files[0];

        var component = this;
        Papa.parse(inventory, {
            header: true,
            complete: function(results) {

                component.setState({
                    feed: results.data
                });

            }
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand href="/">Grid Order Tool</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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
                                  <FileUploader onFileUpload = {this.uploadFile} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>The Grid</h1>
                                <ProductGrid feed = {this.state.feed}/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
