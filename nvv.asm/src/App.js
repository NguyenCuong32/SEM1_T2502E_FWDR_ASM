import "./App.css";
import Header from "./routes/Header";
import MediaPage from "./pages/MediaPage";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
