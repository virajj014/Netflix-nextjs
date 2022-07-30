import React, { useState } from 'react'
import SignupNav from './SignupNav'
import styles from './Signuppage.module.css'
import Image from 'next/image'
import devices from '../../Netflix-images/lap_pc_mobile.png'
import Link from 'next/dist/client/link'
import { tempassvar, tempemailvar } from '../../atoms/tempuserdata'
import { useRecoilState } from 'recoil'
import { useAuth } from '../../Auth/AuthContext'
import { useRouter } from 'next/router'
const regform = () => {
    const [emailerr, setemailerr] = useState('')
    const [passwderr, setpasswderr] = useState('')
    const [email, setemail] = useRecoilState(tempemailvar)
    const [password, setpassword] = useState(tempassvar)
    const router = useRouter();
    const checkemailerr = () => {
        if (email == '') {
            setemailerr('Email is required')
        }

    }
    const checkpasswderr = () => {
        if (password == '') {
            setpasswderr('Password is required')
        }
        if (password.length < 6) {
            setpasswderr('Password must be atleast 6 characters')
        }
    }


    const { user, signin, signup, logout } = useAuth()
    console.log(user)


    const handleSignup = (e) => {
        e.preventDefault()
        console.log(password.length)
        if (email === '') {
            setemailerr('Email is required')
        }
        if (password === '') {
            setpasswderr('Password is required')
        }
        signup(email, password)
            .then((res) => {
                if (res == 'FirebaseError: Firebase: Error (auth/invalid-email).') {
                    console.log('Invalid Email')
                    setemailerr('Invalid Email')
                }
                if (res == 'FirebaseError: Firebase: Error (auth/email-already-in-use).') {
                    console.log('Email already in use')
                    setemailerr('Email already in use')
                }
                if (res == 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    console.log('Weak Password')
                    setpasswderr('Enter a Strong Password')
                }
                if (res == 'signup success') {
                    console.log(res)
                    alert('Signup Successful')
                    router.push('/signup')
                }
            }
            )
            .catch((err) => console.log('signup errr ', err))
    }



    return (
        <div className={styles.outer}>
            <SignupNav />
            <div className={styles.hrline}></div>
            <div className={styles.s2}>
                <div className={styles.s2_2}>
                    <p>STEP <span>1</span> OF <span>3</span></p>
                    <h1>Create a password to start your membership</h1>
                    <h2>Just a few more steps and you're done!<br />
                        We hate paperwork, too.</h2>

                    <input placeholder='Email' onBlur={checkemailerr} value={email} onChange={(e) => {
                        setemail(e.target.value)
                        setemailerr('')
                    }} />
                    {emailerr && <div className={styles.err}>{emailerr}</div>}
                    <input placeholder='Add a Password' onBlur={checkpasswderr} onChange={(e) => {
                        setpassword(e.target.value)
                        setpasswderr('')
                    }} />
                    {passwderr && <div className={styles.err}>{passwderr}</div>}

                    <button onClick={handleSignup}>Next</button>

                </div>
            </div>
        </div>

    )
}

export default regform