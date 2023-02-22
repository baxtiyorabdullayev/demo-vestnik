import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import SendArticle from "./pages/SendArticle/SendArticle";
import Archive from "./pages/Archive/Archive";
import CurrentArticle from "./pages/CurrentArticle/CurrentArticle";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/sendArticle" element={<SendArticle />} />
        <Route path="/currentArticle" element={<CurrentArticle />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
