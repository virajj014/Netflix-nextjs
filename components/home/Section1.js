import React, { useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import styles from './Section1.module.css'
import Movieslider from '../Movieslider'
import Footer from '../Footer'
const Section1 = ({ netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries, }) => {
    const [movie, setmovie] = useState(null)
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    // console.log(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    useEffect(() => {
        setmovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    })

    // console.log(movie)

    // console.log(movie)
    return (
        <div className={styles.outer}>
            <div className={styles.s1}>
                <div className={styles.banner}>
                    <Image src={`${baseUrl}${movie?.backdrop_path}`} layout='fill' objectFit='cover' />
                </div>
                <div className={styles.s11}></div>
            </div>
            <div className={styles.s2}>
                <div className={styles.titledescription}>
                    <h1>{movie?.title}</h1>
                    <p>{movie?.overview}</p>
                    <div className={styles.btncont}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span>Play</span>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
                <div className={styles.sliders}>
                    <h1>Top Rated</h1>
                    <Movieslider movies={topRated} contid={'cont1'} />

                    <h1>Comedy Movies</h1>
                    <Movieslider movies={comedyMovies} contid={'cont2'} />


                    <h1>Action Movies</h1>
                    <Movieslider movies={actionMovies} contid={'cont3'} />

                    <h1>Horror Movies</h1>
                    <Movieslider movies={horrorMovies} contid={'cont4'} />

                    <h1>Romance Movies</h1>
                    <Movieslider movies={romanceMovies} contid={'cont5'} />
                    <h1>Documentaries</h1>
                    <Movieslider movies={documentaries} contid={'cont6'} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Section1