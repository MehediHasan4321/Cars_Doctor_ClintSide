import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AutnContextProvider = createContext(null)
const AuthPrivider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const autn = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const signInWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(autn, email, password)
    }
    const singUpWithEmail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(autn, email, password)
    }
    const singInWithGoogle = () => {
        true
        return signInWithPopup(autn, googleProvider)
    }
    const logOut = () => {
        return signOut(autn)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(autn, user => {
            setcurrentUser(user)
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const userInfo = {
        signInWithEmail,
        currentUser,
        logOut,
        singInWithGoogle,
        singUpWithEmail,
        isLoading
    }
    return (
        <AutnContextProvider.Provider value={userInfo}>
            {children}
        </AutnContextProvider.Provider>
    );
};

export default AuthPrivider;