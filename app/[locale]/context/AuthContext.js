// context/AuthContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/features/auth/authSlice"; // Assuming you have a userSlice.js file
import { auth } from "../firebase/config";
import { useTranslations, useLocale } from "next-intl";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

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
    // const dispatch = useDispatch();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("signed is");
      console.log(email);
      const axios = require("axios");
      const axiosInstance = axios.create({
        baseURL: "http://localhost:1937",
        headers: {
          "Content-Type": "application/json",
        },
      });
      try {
        const response = await axiosInstance.get("/user/me", {
          params: {
            email: "walidchb@gmail.com",
          },
        });
        console.log(response.data);
        dispatch(setUser(response.data)); // Dispatch action with fetched data
      } catch (error) {
        console.error("Error:", error.response.data.error);
      }

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
