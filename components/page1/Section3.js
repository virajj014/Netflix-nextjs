import React from 'react'
import Searchemail from './Searchemail'
import styles from './Section3.module.css'
import Section3card from './Section3card'
const Section3 = () => {
    return (
        <div className={styles.outer}>
            <h1>Frequently Asked Questions</h1>
            <Section3card />
            <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
            <Searchemail />
        </div>
    )
}

export default Section3