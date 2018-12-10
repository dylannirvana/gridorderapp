import React from "react";
import {
    Collapse,
    NavbarToggler,

} from 'reactstrap';


import FilterContainer from "./FilterContainer/FilterContainer";


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.togglePushMenu = this.togglePushMenu.bind(this);
        this.state = {
            isOpen: false,

        };
    }

    togglePushMenu() {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    getFilterValues(filterName) {
        const feed = this.props.feed;
        let filterValueList = [];

        for (let index in this.props.feed) {
            const product = feed[index];


            let filterValue = product[filterName] == undefined ? null : product[filterName].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue)) {
                filterValueList.push(filterValue)
            }
        }

        return filterValueList;
    };


    render() {
        return (

            <ul className={"ml-auto navbar-nav"}>
                <li>
                    <NavbarToggler onClick={this.togglePushMenu} className="mr-2" style={{display: this.props.container.gridPopulated() ? '' : 'none'}}><span
                        className="navbar-text">Filters</span>
                    </NavbarToggler>

                    <Collapse id={"offcanvas-menu"} isOpen={this.state.isOpen} navbar>
                        {
                            <div className={"wrapper"}>
                                <div className={"close"} onClick={this.togglePushMenu}>Close</div>
                                <FilterContainer container={this.props.container}/>
                            </div>



                        }
                    </Collapse>
                </li>

            </ul>
        )
    }
}

export default Menu;