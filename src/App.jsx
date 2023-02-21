import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import SendArticle from "./Pages/SendArticle/SendArticle";
import Archive from "./Pages/Archive/Archive";
import CurrentArticle from "./Pages/CurrentArticle/CurrentArticle";
import MyProfile from "./Pages/MyProfile/MyProfile";

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
