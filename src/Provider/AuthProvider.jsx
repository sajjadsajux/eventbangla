import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const RegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthData = {
    user,
    setUser,
    RegisterUser,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
