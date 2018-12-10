import React from 'react';
import ReactDOM from 'react-dom';
import GridOrder from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridOrder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
