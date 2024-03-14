import { Route, Routes } from "react-router-dom";
import Layout from "./Global/Layout.tsx";
import Login from "./Global/Login.tsx";

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
