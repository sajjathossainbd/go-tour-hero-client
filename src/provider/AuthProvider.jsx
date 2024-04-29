/* eslint-disable react/prop-types */

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Sing In User Google
  const GoogleProvider = new GoogleAuthProvider();
  const singInWithGoogleAuth = (navigate) => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        toast.success("Google Account Login Successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  //   Github Login

  const GithubProvider = new GithubAuthProvider();
  const singInWithGithubAuth = (navigate) => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        toast.success("Github Account Login Successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // Create User Email And Password
  const createUser = (email, password, name, url, navigate) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Account Create Successfully!");
        navigate("/");

        // Profile Update
        updateProfile(user, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            toast.success("Profile updated successfully");
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // Update Profile
  const updateProfileUser = (name, url) => {
    const authUser = auth;
    return updateProfile(authUser.user, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // Sing In User Email And Password
  const singInUser = (email, password, navigate) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        toast.success("User Singin successfully");
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // Logout User
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logout successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // data save
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("data saved", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    singInWithGoogleAuth,
    singInWithGithubAuth,
    createUser,
    singInUser,
    updateProfileUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
