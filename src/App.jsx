import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

export default function App() {
  const token = useSelector((state) => state.userAuth.token);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/signin" />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
