import Header from "../components/Header";

export default function SignIn() {
  return (
    <main className="main bg-dark">
      <Header />
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username"></input>
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me"></input>
            <label for="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
