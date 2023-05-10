import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AutnContextProvider = createContext(null)
const AuthPrivider = ({children}) => {
    const [currentUser,setcurrentUser] = useState(null)
const autn = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const signInWithEmail = (email,password)=>{
    return createUserWithEmailAndPassword(autn,email,password)
}
const singUpWithEmail = (email,password)=>{
    return signInWithEmailAndPassword(autn,email,password)
}
const singInWithGoogle = ()=>{
    return signInWithPopup(autn,googleProvider)
}
const logOut = ()=>{
    return signOut(autn)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(autn,user=>{
        setcurrentUser(user)
    })
    return ()=>unsubscribe()
},[])

    const userInfo= {
        signInWithEmail,
        currentUser,
        logOut,
        singInWithGoogle,
        singUpWithEmail
    }
    return (
        <AutnContextProvider.Provider value={userInfo}>
            {children}
        </AutnContextProvider.Provider>
    );
};

export default AuthPrivider;