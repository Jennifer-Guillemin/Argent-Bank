import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../redux/reducers/profilSlice";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function EditButton() {
  const token = useSelector((state) => state.userAuth.token);
  const profil = useSelector((state) => state.profil);

  // Déclare des états locaux pour gérer l'édition et les champs du formulaire
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(profil.userName);
  const [firstName, setFirstName] = useState(profil.firstName || "");
  const [lastName, setLastName] = useState(profil.lastName || "");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  // Met à jour les états locaux lorsque le profil utilisateur change
  useEffect(() => {
    setNewUserName(profil.userName);
    setFirstName(profil.firstName);
    setLastName(profil.lastName);
  }, [profil]);

  // Fonction pour éditer le nom d'utilisateur
  const editUserName = async (e) => {
    e.preventDefault();
    if (!newUserName) {
      console.log("Field is empty");
      setError("The field cannot be empty.");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUserName }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update username");
      }
      dispatch(setEditProfile(newUserName)); // Met à jour le profil dans Redux
      setIsEditing(false);
      setError("");
      console.log(`Username updated to: ${newUserName}`);
    } catch (err) {
      console.log(err);
      setError("Error updating username.");
    }
  };

  const cancelEdit = () => {
    setNewUserName(profil.userName); // Réinitialiser le nom
    setIsEditing(false); // fermer le mode edition
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <TextInput
            className="input-edit"
            label="User name :"
            id="username"
            type="text"
            autoComplete="username"
            onChange={(e) => {
              setNewUserName(e.target.value);
              setError("");
            }}
            value={newUserName}
          />
          <TextInput
            className="input-edit disabled-input"
            label="First name :"
            id="firstName"
            type="text"
            value={firstName}
            disabled
          />
          <TextInput
            className="input-edit disabled-input"
            label="Last name :"
            id="lastName"
            type="text"
            value={lastName}
            disabled
          />
          {error && <p className="error-message">{error}</p>}
          <br />
          <Button className="edit-button" onClick={editUserName}>
            Save
          </Button>
          <Button className="edit-button" type="button" onClick={cancelEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <Button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit Username
        </Button>
      )}
    </div>
  );
}
