    import React, { Component } from 'react'
    import { 
        Card, 
        // CardImg, 
        // CardText, 
        CardBody,
        CardTitle, 
        // CardSubtitle, 
        // Button, 
        Input, 
        InputGroup, 
        // Collapse, 
        // Navbar, 
        // NavbarToggler, 
        // NavbarBrand, 
        // Nav, 
        // NavItem, 
        // NavLink, 
        Container, 
        Row, 
        Col, 
        Jumbotron 
        } from 'reactstrap';
    import Papa from 'papaparse'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import './App.css'

    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {data: [] };   
            this.handleChange = this.handleChange.bind(this);
            this.updateData = this.updateData.bind(this)
        }
        
        handleChange(event) {
            event.preventDefault()
            const inventory = event.target.files[0]
            Papa.parse(inventory, {
                header: true,
                complete: this.updateData
            })
        } // END

        updateData(results) {
            const data = results.data
            console.log(data)
            this.setState({data}) // I have it in state. How to get it in UI?
        }
        
        renderData() {
            return  this.state.data.length > 1 
               ? this.state.data.map((item) => (
                   // this is where to put the Card
                   <Card key={item.sku} >  
                        <CardTitle> {item.sku} </CardTitle>
                        <CardBody> {item.name} </CardBody>
                   </Card>
               )) 
               : null
            
        }
        render() {
            return (
                <div>
                    <Jumbotron>
                        <form >
                            <InputGroup>
                                Name:
                                <Input type="file" onChange={this.handleChange} />
                            </InputGroup>
                        </form>
                    </Jumbotron>
                    
                    <div className="album">
                        <Container>
                            <Row>
                                <Col xs="3"> {this.renderData()} </Col> 
                            </Row>                            
                        </Container>
                    </div>
                   

                </div>          
            );
        }

    } // END

    export default App