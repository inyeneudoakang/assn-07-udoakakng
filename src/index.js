import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HelloWorld from './HelloWorld';  // Add this line

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />  {/* Replace the existing content with the HelloWorld component */}
  </React.StrictMode>,
  document.getElementById('root')
);

// ... (rest of the file)
