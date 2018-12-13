import React from 'react';

import Papa from "papaparse";

// Render the necessary HTML for user to upload CSV file
export default class FileUploader extends React.Component {

    constructor(props) {
        super(props);

        this.uploadFile = this.uploadFile.bind(this);

    }

    //Takes the parsed JSON from PapaParse and updates the product grid
    uploadFile(event) {
        const inventory = event.target.files[0],
            component = this;

        Papa.parse(inventory, {
            header: true,
            complete: function (results) {

                console.log('FILE UPLOAD')
                component.props.container.setState({
                    feed: Array.from(results.data),
                    grid: results.data,
                    packeryRefresh: true
                });

            }
        });

        //Browsers do not trigger file upload, if the same file is selected more than once..
        //Setting the value of the upload button to null overcomes this issue
        event.target.value = null;


    }



    render() {

        return (

            <label className="file-upload-wrapper white-button btn">
                <input className={"file-upload-button"} onChange={this.uploadFile} type="file" required/>
                <span className={"file-upload-label"}>Select a CSV</span>
            </label>

        )
    }
}



