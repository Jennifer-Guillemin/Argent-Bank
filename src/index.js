import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/banner.css";
import "./styles/footer.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import SignOut from "./pages/SignOut";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<User />} />
        <Route path="/" element={<SignOut />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
