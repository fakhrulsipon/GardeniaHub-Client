import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signInUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () =>{
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const updateProfileUser = (updateUser) => {
        return updateProfile(auth.currentUser, updateUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const userInfo = {
        signInUser,
        loginUser,
        googleUser,
        signOutUser,
        user,
        updateProfileUser,
        setUser

    }
    return (
        <AuthContext value={userInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;