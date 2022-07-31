import { useRouter } from 'next/router'
import React from 'react'
import { useAuth } from '../Auth/AuthContext'
import Section1 from '../components/home/Section1'
import HomeNavbar from '../components/HomeNavbar'
import styles from '../styles/Homepage.module.css'
import requests from '../utils/requests'

export const getServerSideProps = async () => {
    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
    ] = await Promise.all([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ])

    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results,
            // products,
        },
    }
}




const home = ({
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
}) => {

    // console.log(netflixOriginals)




    return (
        <div className={styles.outer}>
            <HomeNavbar />
            <Section1 netflixOriginals={netflixOriginals} trendingNow={trendingNow} topRated={topRated} actionMovies={actionMovies} comedyMovies={comedyMovies} horrorMovies={horrorMovies} romanceMovies={romanceMovies} documentaries={documentaries} />
        </div>
    )
}

export default home