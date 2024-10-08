import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGetProfile } from "../redux/reducers/profilSlice";
import "../styles/user.css";
import Account from "../components/Account";
import EditButton from "../components/EditButton";

export default function User() {
  const token = useSelector((state) => state.userAuth.token);
  const profile = useSelector((state) => state.profil);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        dispatch(setGetProfile({ data })); // Envoie les données du profil à Redux
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataUser();
  }, [token]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br />
          {profile.firstName + " " + profile.lastName + "!"}
        </h1>
        <EditButton />
      </div>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}
