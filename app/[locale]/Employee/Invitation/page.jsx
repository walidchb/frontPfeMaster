"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useTranslations, useLocale } from "next-intl";
import axios from "axios";
import "./style.css";
import { useDispatch } from "react-redux";
import { setOrganization } from "@/store/features/organization/organizationSlice";

import { setUserInfo } from "@/store/features/auth/authSlice";
import NavBarAuth from "@/components/NavBar/NavBarAuth";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Invitation = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  // const [searchParams] = useSearchParams();
  // const invitation = JSON.parse(searchParams.get("invitation"));
  const locale = useLocale();
  const [userInfo, setUserInfo] = useState({});
  const searchParams = useSearchParams();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userinfo = localStorage.getItem("userInfo");
      if (userinfo) {
        let userJson = JSON.parse(userinfo);
        setUserInfo(userJson);
      }
    }
  }, []);
  const [submitting, setSubmitting] = useState(false);
  const invitation = JSON.parse(searchParams.get("invitation"));

  // const data = router.query.invitation;
  console.log("invitation");
  console.log(invitation);

  const accepteInvitation = async () => {
    setSubmitting(true);
    const axiosInstance = axios.create({
      baseURL: "http://localhost:1937",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(0);

    

    try {
      console.log(1);
      const response = await axiosInstance.patch(
        `/user/users?id=${userInfo?._id}`,
        {
          role: invitation?.roleinvitedto,
          team: invitation?.team?._id, // New team value to be pushed
          organizations: invitation?.organisation._id,
        }
      );
      console.log(3);

      try {
        const UserFetchResponse = await axiosInstance.get(`/user/users`, {
          params: { _id: response?.data?._id },
        });
        console.log("userInfo after accept invtation to dispatch");
        // localStorage.removeItem("userInfo");
        localStorage.setItem(
          "userInfo",
          JSON.stringify(UserFetchResponse.data[0])
        );
        dispatch(setUserInfo(UserFetchResponse.data[0])); // Dispatch action with fetched data
      } catch (error) {
        console.error("Error:", error);
      }
      console.log("User updated successfully:", response.data);
      console.log(response.data);

      try {
        const response = await axiosInstance.get(
          "/organization/organizations",
          {
            params: {
              _id: invitation?.organisation._id,
            },
          }
        );

        console.log(response.data[0]);
        // localStorage.removeItem("organization");
        localStorage.setItem(
          "organization",
          JSON.stringify(response.data[0])
        );

        dispatch(setOrganization(response.data[0]));
      } catch (error) {
        console.error("Error:", error);
      }
      try {
        const response = await axiosInstance.patch(
          `/invitation/invitations/${invitation._id}`,
          {
            accepted: true,
          }
        );
        console.log("Invitation updated successfully:", response.data);
        router.push(`/${locale}/Employee/BoardEmployee`);
      } catch (error) {
        console.error(
          "Error updating invitation:",
          error.response?.data || error.message
        );
      }
    } catch (error) {
      console.log(4);

      console.error(
        "Error updating user:",
        error.response?.data || error.message
      );
    }

    
    // setSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBarAuth /> */}
      <div className="flex-grow flex items-center justify-center bg-[url('/BG.jpeg')]">
        <div className="bg-white p-6 rounded shadow max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Invitation à rejoindre l'organisation
          </h2>
          <p className="text-gray-600 mb-2">
            Cher(e) {userInfo?.prenom} {userInfo?.nom},
          </p>
          <p className="text-gray-700 mb-6">
            Vous avez été invité(e) par "{invitation.sendby.prenom}{" "}
            {invitation.sendby.nom} "à rejoindre l'organisation "
            {invitation.organisation.Name}" dans notre application de gestion
            des tâches. En acceptant cette invitation, vous pourrez collaborer
            avec les membres de l'organisation et vous verrez attribuer un rôle
            spécifique. Pour accepter l'invitation, veuillez cliquer sur le lien
            ci-dessous.
          </p>
          {!invitation.accepted ? (
            <button
              onClick={() => accepteInvitation()}
              className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded hover:bg-orange-600 mb-6">
              {!submitting ? (
                "Accepter l'invitation →"
              ) : (
                <div className="flex justify-center items-center">
                  <span
                    className={`text-sm ${
                      submitting ? "text-white" : "text-white"
                    }`}>
                    Loading
                  </span>
                  <div className="h-6 w-6 loaderDots ml-2 "></div>{" "}
                </div>
              )}
            </button>
          ) : (
            <button
              disabled={true}
              className=" cursor-not-allowed inline-block bg-green-500 text-white font-bold py-3 px-6 rounded hover:bg-green-600 mb-6">
              Accepted
            </button>
          )}
          <p className="text-gray-700 mb-4">
            Notre application de gestion des tâches permet aux organisations de
            gérer efficacement leurs projets, d'attribuer des tâches aux membres
            et de suivre l'avancement des travaux.
          </p>
          <p className="text-gray-700">
            Pour en savoir plus sur notre application, veuillez visiter notre
            site web :{" "}
            <a
              href="https://www.votre-app.com"
              className="text-green-600 underline">
              www.votre-app.com
            </a>
          </p>
        </div>
      </div>
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Copyright © 2024. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProtectedRoute(Invitation);
