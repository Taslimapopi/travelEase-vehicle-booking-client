import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, {useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './context';




const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const signinWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        signinWithGoogle,
        logOut

    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;