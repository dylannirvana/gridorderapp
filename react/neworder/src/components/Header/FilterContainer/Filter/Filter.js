import React from "react";

import {ButtonGroup, Button, DropdownMenu, DropdownItem, Collapse} from 'reactstrap';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {

        if (!this.props.filterValues.length) return null;

        return (
           <div>TEST</div>
        );
    }
}

export default Filter;