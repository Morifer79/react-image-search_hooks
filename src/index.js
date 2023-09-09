import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import {ToastContainer, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer transition={Flip} autoClose={1500} />
  </React.StrictMode>
);
