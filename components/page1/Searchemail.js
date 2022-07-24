import React from 'react'
import styles from './Searchemail.module.css'

const Searchemail = () => {
    return (
        <div className={styles.outer}>
            <input placeholder='Email address' />
            <button>Get Started &gt;</button>
        </div>
    )
}

export default Searchemail