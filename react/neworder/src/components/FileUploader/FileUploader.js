import React from 'react';

import Papa from "papaparse";

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
                    grid: results.data,
                    packeryRefresh: true
                });

            }
        });

    //    this.props.container.setState({'packeryRefresh': true})


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



