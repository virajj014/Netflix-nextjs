import React from 'react'
import Searchemail from './Searchemail'
import Navbar from '../Navbar'
import styles from './Section1.module.css'

const Section1 = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.content}>
                <Navbar />
                <div className={styles.text}>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <Searchemail />
            </div>
        </div>
    )
}

export default Section1