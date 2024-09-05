import { useState } from "react";
import Button from "../components/Button";
import EditUser from "../pages/EditUser";

export default function EditButton({ profil }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <Button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </Button>
      ) : (
        <EditUser profile={profil} onCancel={handleCancel} />
      )}
    </div>
  );
}
