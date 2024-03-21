import { Route, Routes } from "react-router-dom";
import Layout from "./Global/Layout.tsx";
import Login from "./Global/Login.tsx";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Login/>}
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
