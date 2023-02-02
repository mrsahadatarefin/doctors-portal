import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()
const auth =getAuth(app) 

const AuthProvider = ( {children}) => {
    const [user,setUser]=useState(null)  
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
const singIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
};
const updateUser = ( userInfo)=>{
    return updateProfile(user,userInfo);
}

const logout = ()=>{
    return signOut(auth);
}



useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        console.log("user observing")
        setUser(currentUser)
    });
    return()=>unsubscribe()

   
  
},[])

   const authInfo = {
             createUser,
             singIn,
             logout,
             user,
             updateUser
             
            

                           }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;