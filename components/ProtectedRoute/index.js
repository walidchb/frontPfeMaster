// // components/ProtectedRoute.js
// "use client";

// import { useAuth } from "../../app/[locale]/context/AuthContext";
// import { redirect, useRouter } from "next/navigation";
// import { useEffect } from "react";

// const ProtectedRoute = (WrappedComponent) => {
//   return (props) => {
//     const { user, loading } = useAuth();

//     // console.log(loading);

//     // console.log(user);

//     // console.log("Bearer Token:", idToken);
//     const router = useRouter();

//     useEffect(() => {
//       if (!user) {
//         router.push("/");
//       }

//       console.log("user from protected");

//       console.log(user);
//       console.log("loading from protected");

//       console.log(loading);
//     }, [user, loading]);

//     if (loading) {
//       return <div>Loading...</div>;
//     } else if (user) {
//       return <WrappedComponent {...props} />;
//     }
//   };
// };

// export default ProtectedRoute;

// components/ProtectedRoute.js
"use client";

import { useAuth } from "../../app/[locale]/context/AuthContext";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import { useEffect } from "react";

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/");
      }
    }, [user, loading, router]);

    if (loading) {
      return <Loader />;
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    // Optional: you can return null or a fallback component if you want to handle the edge case
    // where `loading` is false and `user` is still null (though it should redirect in that case).
    return null;
  };
};

export default ProtectedRoute;
