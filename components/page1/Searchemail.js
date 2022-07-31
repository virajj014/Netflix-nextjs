import Link from 'next/link'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { tempemailvar } from '../../atoms/temuserdata'
import styles from './Searchemail.module.css'
// import { tempemailvar } from '../../atoms/tempuserdata'
// import { useRecoilState } from 'recoil'


const Searchemail = () => {
    const [tempuseremail, settempuseremail] = useRecoilState(tempemailvar)
    const [emailerr, setemailerr] = useState('')

    const checkemail = (e) => {
        if (tempuseremail === '') {
            // alert('Please enter email')
            setemailerr('Email is required')
        }
    }

    // console.log(tempuseremail)

    return (
        <div className={styles.outermost}>
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <input placeholder='Email address' value={tempuseremail} onChange={(e) => settempuseremail(e.target.value)} onBlur={checkemail}
                        onClick={() => setemailerr('')} />
                    <Link href='/signup/registration' ><button>Get Started &gt;</button></Link>
                </div>
                {emailerr && <div className={styles.err}>{emailerr}</div>}
            </div>
        </div>
    )
}

export default Searchemail