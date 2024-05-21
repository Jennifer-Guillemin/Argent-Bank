import { useEffect } from "react"
import "../styles/user.css";
import Account from "../components/Account";
import EditButton from "../components/EditButton";

export default function User() {
  useEffect(() => {
    const fetchDataUser = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            const token = data.body
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    fetchDataUser()
}, [])

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back</h1>
          <EditButton />
        </div>
        <h2 className="sr-only">Accounts</h2>
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
    </div>
  );
}
