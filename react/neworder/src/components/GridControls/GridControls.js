/*
* This component and its children, represent a collection of controls for working with the grid
 */

import React from "react";
import SaveGrid from "./SaveGrid";
import FilterContainer from "./Filters/FilterContainer";


class GridControls extends React.Component {
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




    render() {
        return (

            <ul className={"ml-auto navbar-nav"}>

                <li>
                    {
                        <FilterContainer
                            container={this.props.container}
                        />
                    }

                </li>


                <li style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>

                    {/*SaveGrid is a component for generating a CSV file from the grid tiles */}
                    <SaveGrid container={this.props.container}/>

                </li>


            </ul>
        )
    }
}

export default GridControls;