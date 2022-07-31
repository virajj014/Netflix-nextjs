import Head from 'next/head'
import Image from 'next/image'
import Section1 from '../components/page1/Section1'
import Section2left from '../components/page1/Section2left'
import Section2right from '../components/page1/Section2right'
import Section3 from '../components/page1/Section3'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import img1 from '../Netflix-images/img1.png'
import img2 from '../Netflix-images/img2.png'
import img3 from '../Netflix-images/img3.png'
import img4 from '../Netflix-images/img4.png'
import { useAuth } from '../Auth/AuthContext'
import { useRouter } from 'next/router'

export default function Home() {


  const { user, signIn, signUp, logout } = useAuth();
  const router = useRouter();
  if (user != null) {
    router.push('/home')
  }
  return (
    <div>
      <Section1 />

      <div className={styles.thickhrline}></div>
      <Section2left logo={img1} head1='Enjoy on your TV.' head2='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' />
      <div className={styles.thickhrline}></div>

      <Section2right logo={img2} head1='Download your shows to watch offline.' head2='Save your favourites easily and always have something to watch.' />
      <div className={styles.thickhrline}></div>

      <Section2left logo={img3} head1='Watch everywhere.' head2='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />
      <div className={styles.thickhrline}></div>

      <Section2right logo={img4} head1='Create profiles for children.' head2='Send children on adventures with their favourite characters in a space made just for them—free with your membership.' />
      <div className={styles.thickhrline}></div>


      <Section3 />
      <div className={styles.thickhrline}></div>

      <Footer />
    </div>
  )
}
