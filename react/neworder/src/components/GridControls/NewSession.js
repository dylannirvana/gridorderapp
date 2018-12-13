/*
* This component destroys the current session and starts a new session...
* User is required to upload a new CSV file
 */

import React from 'react';
import {Button} from 'reactstrap';


// Render the necessary HTML for user to upload CSV file
export default class NewSession extends React.Component{

    constructor(props) {
        super(props);

        this.startNewSession = this.startNewSession.bind(this);
    }

    //Destroy the current session and start a new one
    startNewSession(){


        this.props.container.setState({
            'feed': [],
            'grid': [],
            packeryRefresh: false,
            appliedFilters: []
        })


    }
    render() {

        return (
            <Button className={"white-button nav-btn"} onClick={this.startNewSession}>
                New Session
            </Button>

        )
    }
}



