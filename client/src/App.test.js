import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/react/cleanup-after-each';
import * as rtl from "@testing-library/react";




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App />", () => {
  it("renders without crashing", () => {
    rtl.render(<App />);
  });})


