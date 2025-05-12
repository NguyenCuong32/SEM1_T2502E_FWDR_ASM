import "./App.css";
import Header from "./routes/Header";
import MediaPage from "./pages/MediaPage";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media" element={<MediaPage />} />
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
