import React from 'react'
import styles from './Movieslider.module.css'
import Image from 'next/image'
const Movieslider = ({ movies, contid }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    const btnpressprev = () => {
        let box = document.getElementById(contid);
        // console.log(box)
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width / 2;
        width = width + box.offsetWidth;
        // console.log(width);
    }

    const btnpressnext = () => {
        let box = document.getElementById(contid);
        let width = box.clientWidth;
        width = width + box.offsetWidth;
        box.scrollLeft = box.scrollLeft + width / 2;

        // console.log(width);
    }

    // console.log(movies)

    return (
        <div className={styles.product_carousel}>
            <button className={styles.pre_btn} onClick={btnpressprev} id='prevbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className={styles.next_btn} onClick={btnpressnext} id='nextbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className={styles.product_container} id={`${contid}`}>
                {movies.map((movie, index) => (
                    <div className={styles.product_card}>
                        <Image src={`${baseUrl}${movie?.backdrop_path}`} width={'250px'} height={'140px'} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Movieslider