import { onAuthStateChanged, type User } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.ts";

interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;
}

const AuthContext = React.createContext<AuthContextType>({
    currentUser: null,
    userLoggedIn: false,
    loading: true
});

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user: User | null) {
        try {
            if (user) {
                setCurrentUser(user); 
                setUserLoggedIn(true);
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false); 
        }
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {loading ? 
            <>
            <main className="flex items-center justify-center bg-purple/30 h-screen">
            <section className="p-8 text-center font-alegraya-sans font-bold lowercase text-4xl max-w-md mx-5 space-y-8 border bg-white shadow-btn2 relative">
                Loading...
            </section>
            </main>
            </> : children}
        </AuthContext.Provider>
    )
}
