import React from 'react';
import { Input, InputGroup } from 'reactstrap';

// Render the necessary HTML for user to upload CSV file
class FileUploader extends React.Component{

    render() {

        return (
              <div>
                  <InputGroup >
                    < Input
                        type = "file"
                        name = "inputCSV"
                        onChange = {this.props.onFileUpload} //onFileUpload is defined in App.js .. This handler updates the state of App component and re-renders the product grid
                    />
                  </InputGroup>

              </div>

        )
    }
}


export default FileUploader;

