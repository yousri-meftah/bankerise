import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import './utils/i18n';
import { Provider } from 'react-redux';
import {store} from './store/store.tsx';
import '../i18n.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <App />
            </Provider>
          </Suspense>
      </BrowserRouter>
    </React.StrictMode>,
);
