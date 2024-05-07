import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.webp";

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./Home">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item">Username</Link>
          <i className="fa fa-user-circle"></i>
          <Link className="main-nav-item" to="./SignIn">
            Sign In
          </Link>
          <Link className="main-nav-item" to="./SignOut">
            Sign Out
          </Link>
        </div>
      </nav>
    </header>
  );
}
