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

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
