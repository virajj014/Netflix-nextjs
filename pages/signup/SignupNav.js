import Link from 'next/link'
import React from 'react'
import logo from '../../Netflix-images/logo.png'
import styles from './SignupNav.module.css'
import Image from 'next/dist/client/image'
import { useAuth } from '../../Auth/AuthContext'
import { useRouter } from 'next/router'
const SignupNav = () => {
    const { user, signIn, signUp, logout } = useAuth();
    const router = useRouter();
    const handlelogout = () => {
        logout()
        alert('Logout Successful')
        router.push('/')
    }
    return (
        <div className={styles.outer}>
            <div className={styles.left}>
                <Link href='/'>
                    <Image src={logo} alt="logo" layout='responsive' />
                </Link>
            </div>
            <div className={styles.right}>
                {user ?
                    <button onClick={handlelogout}>Sign Out</button>
                    :
                    <Link href='/signin'>
                        <button>Sign In</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default SignupNav