import React, { useEffect, useState } from 'react'
import logo from '../Netflix-images/logo.png'
import Image from 'next/dist/client/image'
import styles from './Homenavbar.module.css'
import children from '../Netflix-images/children.png'
import { useRouter } from 'next/router'
import { useAuth } from '../Auth/AuthContext'

const homeNavbar = () => {
    const [searchbarshow, setSearchbarshow] = useState(false);
    const [isscrolled, setisscrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setisscrolled(true);
            }
            else {
                setisscrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const router = useRouter();
    const { user, signIn, signUp, logout } = useAuth();

    const handleexit = () => {
        logout();
        router.push('/')
    }
    return (
        <div className={isscrolled == true ? styles.outer1 : styles.outer}>
            <div className={styles.left}>
                <div className={styles.s1}>
                    <Image src={logo} alt="logo" />
                </div>
                <div className={styles.s2}>
                    <p className={styles.active}>Home</p>
                    <p>Characters</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>My List</p>
                </div>
            </div>

            <div className={styles.right}>
                <div className={searchbarshow == true ? styles.searchbar : styles.searchbar1}>
                    <svg onClick={() => setSearchbarshow(!searchbarshow)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchbarshow == true ?
                        <input placeholder='Titles, characters, genres' />
                        : <></>}
                    {searchbarshow == true ?
                        <div className={styles.searchbar_emptydiv} onClick={() => setSearchbarshow(false)}></div>
                        : <></>
                    }
                </div>

                <div className={styles.data_type} >
                    <Image src={children} />
                </div>
                <button onClick={handleexit}>Exit Children</button>
                <p className={styles.bottomeight}>children</p>
            </div>
        </div>
    )
}

export default homeNavbar