import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';
import '../i18n.ts';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>


      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Provider>
      </Suspense>

  </React.StrictMode>,
);
