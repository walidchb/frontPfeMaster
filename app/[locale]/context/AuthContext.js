// context/AuthContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/store/features/auth/authSlice";
import { setOrganization } from "@/store/features/organization/organizationSlice";
// Assuming you have a userSlice.js file
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
      const axiosInstance = axios.create({
        baseURL: "https://back-pfe-master.vercel.app",
        headers: {
          "Content-Type": "application/json",
        },
      });
      try {
        const response = await axiosInstance.get("/user/me", {
          params: {
            email: email,
          },
        });

        let user = response.data;
        await localStorage.setItem("userInfo", JSON.stringify(user));
        dispatch(setUserInfo(user)); // Dispatch action with fetched data
        if (user?.role === "orgBoss") {
          try {
            const response = await axiosInstance.get(
              "/organization/organizations",
              {
                params: {
                  Boss: user._id,
                },
              }
            );
            console.log("organization to dispatch");

            console.log(response.data[0]);
            dispatch(setOrganization(response.data[0]));
            await localStorage.setItem(
              "organization",
              JSON.stringify(response.data[0])
            );

            sessionStorage.setItem("user", true);
            localStorage.setItem("user", true);
            router.push(`/${locale}/Employee/BoardEmployee`);
            // dispatch(setUser(response.data)); // Dispatch action with fetched data
          } catch (error) {
            console.error("Error:", error);
          }
        }
        if (user?.role === "individual") {
          router.push(`/${locale}/Employee/BoardEmployee`);
        } else {
          try {
            const response = await axiosInstance.get(
              "/organization/organizations",
              {
                params: {
                  _id: user?.organizations[0]?._id,
                },
              }
            );

            dispatch(setOrganization(response.data[0]));
            await localStorage.setItem(
              "organization",
              JSON.stringify(response.data[0])
            );
            router.push(`/${locale}/Employee/BoardEmployee`);
          } catch (error) {
            console.error("Error:", error);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      // Handle error (e.g., show error message to the user)
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);

    await signOut(auth);
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("organization");

    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
