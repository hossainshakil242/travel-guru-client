import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const AuthInfo = {
        createUser,
        signInWithGoogle,
        logIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;