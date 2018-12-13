This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# Component Structure:

### IMPORTANT: All the components are logically grouped into folders by feature

### Component Diagarm can be found at the below URL:
https://github.com/dylannirvana/gridorderapp/blob/corra/react/neworder/src/component-diagram/component-diagram.pdf
This diagram illustrates all the components that compose the App and their individual roles.

### Core components of the App are 
1. The Product Grid -> Displays a set of Product Components in a Grid Format (located under components/ProductGrid folder)
2. Grid Controls  -> A collection of grid control components, that allow user to interact with the Product Grid (located under components/GridControls folder)
3. Header -> Displays the Header for the App (located under components/Header folder)

### More Info:
1. App.js basically holds the layout and calls the Header & Product Grid Components
2. Grid Controls (except the File Uploader component) are rendered as children of the Header Component. 
3. File Uploader component is rendered as a child of the Product Grid Component 
4. Product Grid renders all the products (Product component) in a  grid form
5. App component (root component) holds the state container, which is passed down to the children via props. 
This state container implements an API, which allows the child components to change the state of App component


# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
