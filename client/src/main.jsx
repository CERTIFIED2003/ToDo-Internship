import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing BrowserRouter for ou site's clean url
import { BrowserRouter } from 'react-router-dom'

// Importing CSS
import "./styles/global.css";

// Importing FONT FAMILY
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Importing Provider to work with Redux
import { Provider } from 'react-redux';
// Importing Store for Provider's store parameter
import { Store } from './redux/store/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);