import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const signInUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        signInUser,
        loginUser
    }
    return (
        <AuthContext value={userInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;