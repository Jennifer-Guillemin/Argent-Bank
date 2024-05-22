import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogOut } from "../redux/reducers/userAuthSlice";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default function EditUser() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        throw new Error("Echec de l'inscription");
      }
      dispatch(setLogOut());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit user info</h1>
        <form onSubmit={SignUp}>
          <TextInput
            className="input-wrapper"
            label="UserName"
            id="username"
            type="text"
            autoComplete="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextInput
            className="input-wrapper"
            label="FirstName"
            id="firstname"
            type="text"
            autoComplete="name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextInput
            className="input-remember"
            label="LastName"
            id="lastname"
            type="text"
            autoComplete="family-name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button className="sign-in-button" type="submit">
            Save
          </Button>
          <Button className="sign-in-button" type="submit">
            Cancel
          </Button>
        </form>
      </section>
    </main>
  );
}
