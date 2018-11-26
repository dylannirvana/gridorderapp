import React, { Component } from 'react';
import { Items } from '../ProductFeed';

// TODO: Render items object from uploadHandler and iterate through in Bootstrap card
// TODO: Must be made accessible to Packery, Draggabilly 
const Grid = () => {
    return (
        <div className="row grid">
            <Items />
        </div>
    );
}

export default Grid;

