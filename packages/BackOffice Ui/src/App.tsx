import { Route, Routes } from "react-router-dom";
import Layout from "./Global/Layout.tsx";
import Login from "./Global/Login.tsx";
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from "./Modules/page_test/page_test";
/*
*/
function App() {
  return (
    <>
    <Routes>
        <Route
          index
          element={<Login/>}
        />
        <Route
          path = "/test"
          element={<AllProducts/>}
        />
        <Route
        path="/private/*"
          element={<Layout/>}
        />
      </Routes>
    </>
  );
}

export default App;
