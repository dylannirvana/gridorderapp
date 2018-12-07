import React from "react";

import { ButtonGroup, Button, DropdownMenu, DropdownItem } from 'reactstrap';
class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        if(!this.props.filterValues.length) return null;
        return (
            <ButtonGroup className="btn-group" role="group" aria-label="Basic example">
                {
                    Object.values(this.props.filterValues).map(filterValue =>
                        <Button type="button" className="btn btn-secondary" onClick={this.props.onFilterChange} key={filterValue}>{filterValue}</Button>


                    )
                }

            </ButtonGroup>

        );
    }
}

export default Filter;