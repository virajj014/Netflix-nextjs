import React, { useState } from 'react'
import SignupNav from './SignupNav'
import styles from './Signuppage.module.css'
import { useRecoilState } from 'recoil'
import { tempemailvar, tempassvar } from '../../atoms/temuserdata'
import { useAuth } from '../../Auth/AuthContext'
import { useRouter } from 'next/router'

const regform = () => {
    const [email, setemail] = useRecoilState(tempemailvar)
    const [password, setpassword] = useRecoilState(tempassvar)

    const { user, signIn, signUp, logout } = useAuth();

    const [emailerr, setemailerr] = useState('')
    const [passwderr, setpasswderr] = useState('')
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
        console.log(password)
    }

    const handleSignup = (e) => {
        e.preventDefault();
        // console.log(data);
        if (email === '') {
            setemailerr('Email is required')
        }
        if (password === '') {
            setpasswderr('Password is required')
        }

        signUp(email, password).then((res) => {
            if (res == 'FirebaseError: Firebase: Error (auth/invalid-email).') {
                // console.log('Invalid Email')
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
            // console.log(res);
        })
    }


    // console.log(email)
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

                    <input placeholder='Email' type={'email'} value={email} onBlur={checkemailerr}
                        onChange={(e) => {
                            setemailerr('')
                            setemail(e.target.value)
                        }} />
                    {emailerr && <div className={styles.err}>{emailerr}</div>}

                    <input placeholder='Password' value={password} type={'password'} onBlur={checkpasswderr}
                        onChange={(e) => {
                            setpasswderr('')
                            setpassword(e.target.value)
                        }}
                    />
                    {passwderr && <div className={styles.err}>{passwderr}</div>}

                    <button onClick={handleSignup}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default regform

