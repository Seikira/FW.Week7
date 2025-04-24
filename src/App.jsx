import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import NowPlaying from "./components/NowPlaying";
import About from "./components/About";
import './App.css';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/movies" element={<Layout><Reviews /></Layout>} />
                <Route path="/now-playing" element={<Layout><NowPlaying /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
