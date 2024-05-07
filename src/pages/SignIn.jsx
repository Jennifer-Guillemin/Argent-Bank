import { Link } from "react-router-dom";
import "../styles/signin.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <div>
      <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"></input>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="./User"><button className="sign-in-button" type="submit">
            Sign In
          </button>
          </Link>
        </form>
      </section>
    </main>
    <Footer />
    </div>
  );
}
