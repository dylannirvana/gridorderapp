import React, { Component } from 'react';

// TODO: Iterate over data in Bootstrap .row .col-md 
// TODO: Make sure that Packery, Draggabilly have access .grid .grid-item 
// And Isotope can access taxonomy

class Grid extends Component {
    render() {
        const { itemList } = this.props;

        return (
            <div className="row grid">

            </div>
        );
    }
}


// import React, { Component } from 'react';
// import ProductFeed from '../ProductFeed';
// import './Grid.css';

// class Grid extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="row grid">
//                     <div className="col-md-4 grid-item">
//                         {items.itemcode} // out of scope. use import export objects
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// console.log('Hey there ' + items.itemcode)
// export default Grid;
