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
// import ProductFeed from './components/ProductFeed';
import { Input, InputGroup } from 'reactstrap';
import Papa from 'papaparse';


const ProductImport = (props) => {
        return (
          <div>
            <InputGroup>
              <Input type="file" name="inputCSV" onChange={props.uploadHandler}/>
            </InputGroup>
          </div>
        )
}

const Grid = (props) => (
    <div>
        {props.someValue}
    </div>
)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { itemList: [] }
    }
    const itemList = []
    
    uploadHandler = (event) => {
        const inventory = event.target.files[0];
    
        Papa.parse(inventory, {
            header: true,
            complete: function(results) {
                const items = results.data;
                console.log(items);
                // const map1 = items.map()
                // var hello = document.getElementById('douche');
                // hello.innerHTML = items;
                this.setState({ itemList: items })
            }
        })
    }


    // constructor(props) {
    //     super(props);

    //     this.toggle = this.toggle.bind(this);
    //     this.state = {
    //         isOpen: false
    //     };
    // }
    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
    
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
                                  <ProductImport uploadHandler = {this.uploadHandler} />                              
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>The Grid</h1>                    
                                {/* <div id="douche"/> */}
                                {itemList.map(items => <Grid someValue={items} />)}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
