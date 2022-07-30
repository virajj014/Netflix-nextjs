import Navlogo from "../components/Navlogo"
import styles from '../styles/Signin.module.css'
import Footer from "../components/Footer"
import { useState } from "react"
import { useAuth } from "../Auth/AuthContext"
import Link from 'next/link'

const signin = () => {
    const [emailerror, setemailerror] = useState(false)
    const [passworderror, setpassworderror] = useState(false)
    const [passwordlengtherror, setpasswordlengtherror] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(data.password.length)
        if (data.email === '') {
            setemailerror(true)
        }
        if (data.password === '') {
            setpassworderror(true)
        }
        if (data.password.length < 6 || data.password.length > 12) {
            setpasswordlengtherror(true)
        }
    }
    const { user, signin, signup, logout } = useAuth()
    console.log(user)
    return (
        <div className={styles.outer}>
            <div className={styles.content}>
                <Navlogo />
                <div className={styles.container}>
                    <div className={styles.form}>
                        <form>
                            <h1>Sign In</h1>
                            {emailerror && <p className={styles.error}>Email is required</p>}
                            <input placeholder="Email or phone number" value={data.email} onChange={(e) => {
                                setData({ ...data, email: e.target.value })
                                setemailerror(false)
                            }} />
                            {passworderror && <p className={styles.error}>Password is required</p>}
                            {passwordlengtherror && <p className={styles.error}>Password Length should be between 6 to 12</p>}

                            <input placeholder="Password" type='password'
                                value={data.password} onChange={(e) => {
                                    setData({ ...data, password: e.target.value })
                                    setpassworderror(false)
                                    setpasswordlengtherror(false)
                                }}
                            />
                            <button onClick={handleLogin}>Sign In</button>
                            <div className={styles.forms1}>
                                <div>
                                    <input type="checkbox" id="remme" name="Remember Me" value="Remember Me" />
                                    <label htmlFor="reme"> Remember me</label><br></br>
                                </div>
                                <p>Need help?</p>
                            </div>
                        </form>
                        <div className={styles.forms2}>
                            <h1>New to Netflix?   <Link href="/signup/registration">
                                <span>Sign up now</span>
                            </Link></h1>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <span>Learn more.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default signin