import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing pages
import SplashScreen from "./components/SplashScreen";
import HomePage from "./pages/home";

function App() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;