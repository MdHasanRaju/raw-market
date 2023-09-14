import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
import { Password } from "@mui/icons-material";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)


    const createUser = (email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const  signIn = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser)
         console.log('user login ', currentUser)
         setLoding(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

      const authInfo = {
              user,
              loading,
              createUser,
              signIn,
              logOut,
      }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;