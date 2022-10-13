import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from "../firebase";


const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

  const signin = (email, password) => {
    //storing emil in localk storage for later use
    localStorage.setItem("email", email)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    //removing email form local storage
    localStorage.removeItem("email");
    localStorage.removeItem("id")
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    };
  }, [])
  return (
    <UserContext.Provider value={{ user, logout, signin }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}