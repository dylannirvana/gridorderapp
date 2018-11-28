This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## TODO:

App.js basically holds the layout. ProductFeed input passes event.target to the uploadHandler, parses the CSV into JSON. _item_ is the array object that needs to be  rendered in Bootstrap Grid and interated through, and accessible to Packery <br>

Props and state needs to be added to do the following. Please refer to Issue #38. <br>

1. Render items object from uploadHandler in Grid 
2. Iterate over object in Bootstrap .row .col-md-4 
3. Make sure that Packery and Draggabilly have access to .grid .grid-item 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
