import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../Netflix-images/logo.png'
import Link from 'next/dist/client/link'
const Navlogo = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.left}>
                <Link href='/'>
                    <Image src={logo} alt="logo" layout='responsive' />
                </Link>
            </div>
        </div>
    )
}

export default Navlogo