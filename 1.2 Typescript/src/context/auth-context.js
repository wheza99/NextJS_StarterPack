"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth, db } from "@/lib/firebaseConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State untuk mengontrol loading
  const router = useRouter();

  // Mengambil data user dari firebase firestore
  const getUserData = async (currentUser) => {
    try {
      const usersRef = doc(db, "users", currentUser.uid);
      const userDoc = await getDoc(usersRef);
      const userData = userDoc.data();

      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  // Mengecek apakah user sudah autentikasi
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getUserData(currentUser);
      } else {
        setUser(null);
        router.push("/login"); // Redirect ke login jika tidak ada user
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  // Logout
  const logout = () => signOut(auth);

  // Return Auth Context Provider
  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
