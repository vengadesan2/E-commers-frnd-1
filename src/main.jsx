import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store.jsx'
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <HelmetProvider>
    <ToastContainer autoClose={2000} />
    <App />
    </HelmetProvider>
    </Provider>
   
  </React.StrictMode>,
)
