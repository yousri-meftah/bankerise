//import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/Auth/AuthProvider";

import { AppRouter } from "./routes"


const App = () => {
    return (
        <AuthProvider>
      <AppRouter />
    </AuthProvider>
    );
};

export default App;