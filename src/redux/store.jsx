import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./reducers/userAuthSlice";
import profilSlice from "./reducers/profilSlice";

const store = configureStore({
    /* Définition des reducers */
  reducer: {
    userAuth: userAuthSlice,
    profil: profilSlice,
  },
});

export default store;
