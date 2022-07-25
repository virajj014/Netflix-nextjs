import React, { useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import styles from './Section1.module.css'
const Section1 = ({ netflixOriginals }) => {
    const [movie, setmovie] = useState(null)
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    // console.log(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    useEffect(() => {
        setmovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    })

    console.log(movie)
    return (
        <div className={styles.outer}>
            <Image src={`${baseUrl}${movie?.backdrop_path}`} layout='fill' />
        </div>
    )
}

export default Section1