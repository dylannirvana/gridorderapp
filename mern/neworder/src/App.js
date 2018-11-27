import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    InputGroup,
    Container,
    Row,
    Col,
    Jumbotron,
    InputGroup,
} from 'reactstrap';
import Papa from 'papaparse';


const productImport = () => (
    <div>
        <InputGroup>
            <Input type="file" name="inputCSV" onChange={uploadHandler}/>
        </InputGroup>
    </div>
)

const Grid = (props) => (
    <div>
        {props.someValue}
    </div>
)

class ProductFeed extends React.Component {
    state = {
        itemList: []
    }

    uploadHandler = (event) => {
        const inventory = event.target.files[0];
    
        Papa.parse(inventory, {
            header: true,
            complete: function(results) {
                const items = results.data;
                console.log(items) // works!
                this.setState({ itemList: items })
            }
        })
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
                                <h1>Upload Product Feed</h1>                    
                                    <ProductImport />                              
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Here is the Grid</h1>                    
                                {/* {itemList.map(item => <Grid someValue={item} />)}                               */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
