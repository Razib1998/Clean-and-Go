/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firbase.config";




export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Create New User

    const createUser = (email, password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Mange User

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setIsLoading(false);
            console.log(currentUser);
        });
        return ()=>{
            return unsubscribe;
        }
    },[])

    // For login

    const login = (email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = ()=>{
        setIsLoading(true);
        return signOut(auth)
    }

    const authInfo ={

        user,
        isLoading,
        createUser,
        login,
        logout
    }



  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
