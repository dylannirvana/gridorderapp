import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import Papa from "papaparse";
import './FileUploader.scss';
// Render the necessary HTML for user to upload CSV file
export default class FileUploader extends React.Component{

    //Takes the parsed JSON from PapaParse and updates the product grid
    uploadFile = (event) => {
        const inventory = event.target.files[0];

        const component = this;
        Papa.parse(inventory, {
            header: true,
            complete: function (results) {

               // component.props.container.setState('feed',results.data)
               // component.props.container.setState('grid',results.data)
                component.props.container.setState({
                    feed: Array.from(results.data),
                    grid: results.data
                });

            }
        });


    }

    render() {

        return (

            <label className="file-upload-wrapper">
                <input className={"file-upload-button"} onChange={this.uploadFile} type="file" required/>
                <span className={"file-upload-label"}>Select a CSV</span>
            </label>





        )
    }
}



