import { createSlice } from "@reduxjs/toolkit";

const profilSlice = createSlice({
  name: "profil",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
  },

  reducers: {
    /* Reducer pour définir le profil de l'utilisateur */
    setGetProfile: (state, action) => {
      state.email = action.payload.data.body.email;
      state.firstName = action.payload.data.body.firstName;
      state.lastName = action.payload.data.body.lastName;
      state.userName = action.payload.data.body.userName;
    },
    /* Reducer pour éditer le nom d'utilisateur */
    setEditProfile: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setGetProfile, setEditProfile } = profilSlice.actions;
export default profilSlice.reducer;
