
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    // displayName: user.displayName,
                })
            }
            else {
                setUser(null);
            }
        })
        return () => unsubscribe();
    }, [])

    const signUp = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password).then(() => {
            console.log("signup success");
            return 'signup success';
        })
            .catch(error => {
                return error;
            })
    }

    const signIn = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log("signin success");
            return 'signin success';
        }).catch(error => {
            return error;
        })
    }

    const logout = async () => {
        try {
            setUser(null);
            await auth.signOut();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }


    return (
        < AuthContext.Provider value={{ user, signIn, signUp, logout }}>
            {children}
        </AuthContext.Provider >
    )
}
