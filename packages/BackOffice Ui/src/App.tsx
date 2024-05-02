
import { AuthProvider } from "./Components/Auth/AuthProvider";
import { AppRouter } from "./routes"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;