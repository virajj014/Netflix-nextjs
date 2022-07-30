import Link from 'next/link'
import React from 'react'
import logo from '../../Netflix-images/logo.png'
import styles from './SignupNav.module.css'
import Image from 'next/dist/client/image'

const SignupNav = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.left}>
                <Link href='/'>
                    <Image src={logo} alt="logo" layout='responsive' />
                </Link>
            </div>
            <div className={styles.right}>
                <Link href='/signin'>
                    <button>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default SignupNav