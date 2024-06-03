// context/AuthContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useTranslations, useLocale } from "next-intl";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const locale = useLocale();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("user", true);
      localStorage.setItem("user", true);
      router.push(`/${locale}/Employee/BoardEmployee`);
    } catch (error) {
      // Handle error (e.g., show error message to the user)
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
    // setLoading(true);
    // await signInWithEmailAndPassword(auth, email, password);
    // setLoading(false);
  };

  const logout = async () => {
    setLoading(true);

    await signOut(auth);
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
