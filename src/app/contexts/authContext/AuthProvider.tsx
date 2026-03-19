import { onAuthStateChanged, type User } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.ts";

interface AuthContextType {
    currentUser: User | null;
    isUserLoggedIn: boolean;
    loading: boolean;
}

const AuthContext = React.createContext<AuthContextType>({
    currentUser: null,
    isUserLoggedIn: false,
    loading: true,
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initializeUser(user: User | null) {
            try {
                setCurrentUser(user);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        }

        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    const isUserLoggedIn = Boolean(currentUser);

    const value = {
        currentUser,
        isUserLoggedIn,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <main className="flex items-center justify-center bg-purple/30 h-screen">
                    <section className="p-8 text-center font-alegraya-sans font-bold lowercase text-4xl max-w-md mx-5 space-y-8 border bg-white shadow-btn2 relative">
                        Loading...
                    </section>
                </main>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}
