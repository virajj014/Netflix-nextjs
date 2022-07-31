import React, { useState } from 'react'
import styles from './Section3card.module.css'

const Section3card = () => {
    const [one, setone] = useState(false)
    const [two, settwo] = useState(false)
    const [three, setthree] = useState(false)
    const [four, setfour] = useState(false)
    const [five, setfive] = useState(false)

    return (
        <div className={styles.outer}>
            <div className={styles.card}>

                <div className={styles.top}>
                    <h1> What is Netflix?</h1>
                    <button onClick={() => {
                        setone(!one)
                        settwo(false)
                        setthree(false)
                        setfour(false)
                        setfive(false)
                    }} className={one == true ? styles.btn_active : styles.btn}>+</button>
                </div>
                <div className={styles.hrline}></div>
                {
                    one == true ?
                        <div className={styles.bottom}>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                            <br />
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </div>
                        : <></>
                }
            </div>

            <div className={styles.card}>
                <div className={styles.top}>
                    <h1>How much does Netflix cost?</h1>
                    <button
                        onClick={() => {
                            setone(false)
                            settwo(!two)
                            setthree(false)
                            setfour(false)
                            setfive(false)
                        }}
                        className={two == true ? styles.btn_active : styles.btn}
                    >+</button>
                </div>
                <div className={styles.hrline}></div>
                {two == true ? <div className={styles.bottom}>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </div> : <></>}
            </div>

            <div className={styles.card}>
                <div className={styles.top}>
                    <h1>Where can I watch?</h1>
                    <button
                        onClick={() => {
                            setone(false)
                            settwo(false)
                            setthree(!three)
                            setfour(false)
                            setfive(false)
                        }}

                        className={three == true ? styles.btn_active : styles.btn}
                    >+</button>
                </div>
                <div className={styles.hrline}></div>
                {three == true ? <div className={styles.bottom} >
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    <br />
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </div> : <></>
                }

            </div>

            <div className={styles.card}>
                <div className={styles.top}>
                    <h1>How do I cancel?</h1>
                    <button onClick={() => {
                        setone(false)
                        settwo(false)
                        setthree(false)
                        setfour(!four)
                        setfive(false)
                    }} className={four == true ? styles.btn_active : styles.btn}>+</button>
                </div>
                <div className={styles.hrline}></div>
                {four == true ? <div className={styles.bottom}>
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </div> : <></>}
            </div>

            <div className={styles.card}>
                <div className={styles.top}>
                    <h1>Is Netflix good for kids?</h1>
                    <button onClick={() => {
                        setone(false)
                        settwo(false)
                        setthree(false)
                        setfour(false)
                        setfive(!five)
                    }} className={five == true ? styles.btn_active : styles.btn}>+</button>
                </div>
                <div className={styles.hrline}></div>
                {five == true ?
                    <div className={styles.bottom}>
                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                        <br />
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </div>
                    :
                    <></>}
            </div>
        </div>
    )
}

export default Section3card