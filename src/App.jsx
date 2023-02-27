import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { StateContext } from "./context";

// components ******************************
import Navbar from "./components/Navbar/Navbar";

// pages **********************************
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import SendArticle from "./pages/SendArticle/SendArticle";
import Archive from "./pages/Archive/Archive";
import CurrentArticle from "./pages/CurrentArticle/CurrentArticle";
import MyProfile from "./pages/MyProfile/MyProfile";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
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
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
