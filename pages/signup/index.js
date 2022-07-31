import React from 'react'
import SignupNav from './SignupNav'
import styles from './index.module.css'
import Link from 'next/link'


const index = () => {
    return (
        <div className={styles.outer}>
            <SignupNav />
            <div className={styles.hrline}></div>
            <div className={styles.inner}>
                <div className={styles.s1}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className={styles.s2}>
                    <p>STEP <span>2</span> OF <span>3</span></p>
                    <h1>Choose your plan.</h1>
                    <div className={styles.s21}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <h2>No commitments, cancel anytime.</h2>
                    </div>
                    <div className={styles.s21}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <h2>Everything on Netflix for one low price.</h2>
                    </div>
                    <div className={styles.s21}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <h2>No ads and no extra fees. Ever.</h2>
                    </div>

                </div>

                <Link href='/signup/planform'>
                    <button>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default index