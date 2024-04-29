import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
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

  const authInfo = {
    createUser,
    singInUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
