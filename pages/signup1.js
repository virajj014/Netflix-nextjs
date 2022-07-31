import React, { useState } from 'react'
import Navlogo from '../components/Navlogo'
import styles from '../styles/Signin.module.css'
import Link from 'next/dist/client/link'
import { useAuth } from '../Auth/AuthContext'

const signup = () => {
    const [emailerror, setemailerror] = useState('');
    const [passworderror, setpassworderror] = useState('');

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    // console.log(data);
    const { user, signIn, signUp, logout } = useAuth();

    const handleSignup = (e) => {
        e.preventDefault();
        // console.log(data);
        if (data.email === '') {
            setemailerror('Email is required')
        }
        if (data.password === '') {
            setpassworderror('Password is required')
        }

        signUp(data.email, data.password).then((res) => {
            if (res == 'FirebaseError: Firebase: Error (auth/invalid-email).') {
                // console.log('Invalid Email')
                setemailerror('Invalid Email')
            }
            if (res == 'FirebaseError: Firebase: Error (auth/email-already-in-use).') {
                console.log('Email already in use')
                setemailerror('Email already in use')
            }
            if (res == 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).') {
                console.log('Weak Password')
                setpassworderror('Enter a Strong Password')
            }
            if (res == 'signup success') {
                console.log(res)
                alert('Signup Successful')
            }
            console.log(res);
        })
    }


    return (
        <div className={styles.outer}>
            <div className={styles.content}>
                <Navlogo />
                <div className={styles.container}>
                    <div className={styles.form}>
                        <form>
                            <h1>Sign Up</h1>
                            {emailerror != '' && <p className={styles.error}>{emailerror}</p>}
                            <input placeholder="Email or phone number" value={data.email} onChange={(e) => {
                                setData({ ...data, email: e.target.value })
                                setemailerror('')
                            }} />
                            {passworderror != '' && <p className={styles.error}>{passworderror}</p>}
                            <input placeholder="Password" type='password' value={data.password}
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value })
                                    setpassworderror('')
                                }} />

                            <button onClick={handleSignup}>Sign Up</button>
                            <div className={styles.forms1}>
                                <div>
                                    <input type="checkbox" id="reme" name="Remember Me" value="Remember Me" />
                                    <label for="reme"> Remember me</label><br></br>
                                </div>
                                <p>Need help?</p>
                            </div>
                        </form>

                        <div className={styles.forms2}>
                            <h1>New to Netflix?
                                <Link href='/signin'><span>Sign in </span></Link>
                            </h1>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <span>Learn more.</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup