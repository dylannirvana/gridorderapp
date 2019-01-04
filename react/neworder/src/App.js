import React, { Component } from 'react'
import { Input, InputGroup, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron } from 'reactstrap';
import Papa from 'papaparse'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



const ProductUpload = () => {
    const uploadHandler = (e) => {
        e.preventDefault();
        const inventory = e.target.files[0]
        Papa.parse(inventory, {
          header: true,
          complete: function(results) {
            const items = results.data;
            console.log(items)
          } 
        })
      }
    
    return (
        <div>
          <InputGroup>
            <Input type="file" name="inputCSV" onChange={uploadHandler} />
          </InputGroup>
        </div>
      )
}

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
                                {/* <ProductGrid /> */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
    export default App;
