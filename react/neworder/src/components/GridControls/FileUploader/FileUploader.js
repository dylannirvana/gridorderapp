import React from 'react';

import Papa from "papaparse";

// Render the necessary HTML for user to upload CSV file
const FileUploader =  (props) => {


    //Takes the parsed JSON from PapaParse and updates the product filteredProducts
    function uploadHandler(event){
        const inventory = event.target.files[0];

        props.container.showSpinner();

        Papa.parse(inventory, {
            header: true,
            complete: function (results) {

                console.log('Total Products : ' + results.data.length);

                props.container.initFilterFactory(results.data);

               props.container.hideSpinner();


            }
        });

        //Browsers do not trigger file upload, if the same file is selected more than once..
        //Setting the value of the upload button to null overcomes this issue
        event.target.value = null;


    }




        return (

            <label className="file-upload-wrapper white-button btn">
                <input className={"file-upload-button"} onChange={uploadHandler} type="file" required/>
                <span className={"file-upload-label"}>Select a CSV</span>
            </label>

        )

}

export default FileUploader;

