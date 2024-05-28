import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/banner.css";
import "./styles/footer.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import Footer from "./components/Footer";

/* Création de RoutesWrapper pour gérer les routes avec useSelector */
const RoutesWrapper = () => {
  const token = useSelector((state) => state.userAuth.token);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/user"
        element={token ? <User /> : <Navigate to="/signin" />}
      />
      <Route
        path="/edituser"
        element={token ? <EditUser /> : <Navigate to="/signin" />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Envelopper l'application avec Provider */}
      <Router>
        <Header />
        <RoutesWrapper />
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
