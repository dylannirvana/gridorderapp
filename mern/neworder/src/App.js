// import React, { Component } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container,
//     Row,
//     Col,
//     Jumbotron,
// } from 'reactstrap';
// import ProductFeed from './components/ProductFeed';
// import Grid from './components/Grid';

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }


//     // Input that takes in full CSV product feed 
// const ProductFeed = () => {
//     return (
//       <div>
//       <InputGroup>
//       <Input type="file" name="inputCSV" onChange={uploadHandler}/>
//       </InputGroup>
  
//       </div>
//     )
//   }

  
    
// // Handler Papa.parse converts CSV to JSON
// function uploadHandler(event) {
  
//     const inventory = event.target.files[0];
  
//     Papa.parse(inventory, {
//       header: true,
//       complete: function(results) {     
//         const Items = results.data;
//       }
//     })
//   }
  
    
//     render() {
//         return (
//             <div>
//                 <Navbar color="dark" dark expand="lg">
//                     <NavbarBrand href="/">Grid Order Tool</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/components/">Hello Colleen!</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="https://github.com/dylannirvana/gridorder">Github</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//                 <Jumbotron>
//                     <Container>
//                         <Row>
//                             <Col>
//                                 <h1>Welcome to GO App</h1>                    
//                                   <ProductFeed />                              
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Jumbotron>
//             </div>
//         );
//     }
// }

// export default App;
