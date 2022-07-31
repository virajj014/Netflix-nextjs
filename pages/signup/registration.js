import React from 'react'
import SignupNav from './SignupNav'
import styles from './Signuppage.module.css'
import Image from 'next/image'
import devices from '../../Netflix-images/lap_pc_mobile.png'
import Link from 'next/dist/client/link'


const registration = () => {
    return (
        <div className={styles.outer}>
            <SignupNav />
            <div className={styles.hrline}></div>
            <div className={styles.s1}>
                <div className={styles.s1_1}>
                    <Image src={devices} layout='responsive' />
                </div>
                <div className={styles.s1_2}>
                    <p>STEP <span>1</span> OF <span>3</span></p>
                    <h1>Finish setting up your account</h1>
                    <h2>Netflix is personalised for you. Create a password to watch on any device at any time.</h2>
                    <Link href='/signup/regform'>
                        <button>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default registration