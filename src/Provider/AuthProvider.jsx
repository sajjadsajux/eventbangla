import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const RegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogOutUser = () => {
    return signOut(auth);
  };
  const LoginUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const LoginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const UpdateUser = (UpdatedData) => {
    return updateProfile(auth.currentUser, UpdatedData);
  };
  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthData = {
    user,
    setUser,
    RegisterUser,
    LogOutUser,
    LoginUser,
    loading,
    setLoading,
    UpdateUser,
    LoginGoogle,
    ResetPassword,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
