import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const productImport = () => {
    return (
        <div>
            <InputGroup>
                <Input type="file" name="inputCSV" onChange={uploadHandler}/>
            </InputGroup>
        </div>
    )
}

class Grid extends React.Component {

    function uploadHandler(event) {
        const inventory = event.target.files[0];
    
        Papa.parse(inventory, {
            header: true,
            complete: function(results) {
                const items = results.data;
                return <Grid />
            }
        })
    }   

    render() {
        return (
            <div className="row grid">
                {this.props.value}
            </div>
        );
    }
}

class ProductFeed extends React.Component {
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
                                    <Grid />                              
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

ReactDOM.render(<ProductFeed />, document.getElementById('root'));
