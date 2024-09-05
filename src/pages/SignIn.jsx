import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogIn } from "../redux/reducers/userAuthSlice";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import "../styles/signin.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Si la réponse n'est pas OK, on suppose que les informations sont incorrectes
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Invalid email or password"); // Affiche le message d'erreur venant du serveur ou un message par défaut
        return;
      }

      const data = await response.json();
      const token = data.body.token;
      dispatch(setLogIn({ token }));
      navigate("/user");
    } catch (err) {
      console.log(err);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={LogIn}>
          <TextInput
            className="input-wrapper"
            label="E-mail"
            id="email"
            type="text"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            className="input-wrapper"
            label="Password"
            id="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            className="input-remember"
            label="Remember me"
            id="remember-me"
            type="checkbox"
            onChange={() => setCheckBox(!checkBox)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Affiche le message d'erreur */}
          <Button className="sign-in-button" type="submit">
            Sign In
          </Button>
        </form>
      </section>
    </main>
  );
}
