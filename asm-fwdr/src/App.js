import NavBar from "./components/navbar";
import MusicCard from "./components/container";
import Footer from "./components/footer";
import Login from "./components/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MusicCard /> */}
      <Routes>
        <Route path="/" element={<MusicCard />} />
        <Route path="/container" element={<MusicCard />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
