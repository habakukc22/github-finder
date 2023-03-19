import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import { GithubContextProvider } from "./context/github/GithubContext";
import { AlertContextProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubContextProvider>
      <AlertContextProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route
                  path="/*"
                  element={<Navigate to="/notfound" replace />}
                />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubContextProvider>
  );
}

export default App;
//in in router v5 is component and in v6 is element
