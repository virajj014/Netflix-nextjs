import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebaseConfig"

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)
// const [loading, setLoading] = useState(true)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,

                })
            }
            else {
                setUser(null)
            }
            // setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signup = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password).then(() => {
            // console.log('signup success')
            return 'signup success'
        }).catch(error => {
            // console.log(error)
            return error
        })
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log('signin success')
        }).catch(error => {
            // console.log(error)
            return error
        })
    }


    const logout = async () => {
        try {
            setUser(null)
            await auth.signOut()
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    return (
        <AuthContext.Provider value={{ user, signin, signup, logout }}>
            {children}
        </AuthContext.Provider>
    )
}