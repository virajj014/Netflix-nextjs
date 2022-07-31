import React, { useState } from 'react'
import SignupNav from './SignupNav'
import styles from './Planform.module.css'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { tempemailvar, tempassvar } from '../../atoms/temuserdata';
import { useRecoilState } from 'recoil'
import { useAuth } from '../../Auth/AuthContext';
import { useRouter } from 'next/router';


const planform = () => {
    const [plan1, setplan1] = useState(true)
    const [plan2, setplan2] = useState(false)
    const [plan3, setplan3] = useState(false)
    const [plan4, setplan4] = useState(false)



    const { user, signIn, signUp, logout } = useAuth();
    const handlePlan1 = () => {
        setplan1(true)
        setplan2(false)
        setplan3(false)
        setplan4(false)
    }
    const handlePlan2 = () => {
        setplan1(false)
        setplan2(true)
        setplan3(false)
        setplan4(false)
    }
    const handlePlan3 = () => {
        setplan1(false)
        setplan2(false)
        setplan3(true)
        setplan4(false)
    }

    const handlePlan4 = () => {
        setplan1(false)
        setplan2(false)
        setplan3(false)
        setplan4(true)
    }
    const router = useRouter();

    const colref = collection(db, 'users')
    const handleSubmit = async () => {
        await addDoc(colref, { email: user.email, plan: plan1 ? 1 : plan2 ? 2 : plan3 ? 3 : plan4 ? 4 : 0 }).then((res) => {
            alert('Plan added successfully')
            logout()
            router.push('/signin')
        }).catch((err) => { console.log(err) })
    }
    return (
        <div className={styles.outer}>
            <SignupNav />
            <div className={styles.hrline}></div>
            <div className={styles.inner}>
                <p className={styles.step}>STEP<span>1</span>OF<span>3</span></p>
                <h1>Choose the plan that’s right for you</h1>
                <div className={styles.s11}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan1 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2> Watch all you want. Ad-free.</h2>
                </div>
                <div className={styles.s11}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan1 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2>Recommendations just for you.</h2>
                </div>
                <div className={styles.s11}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan1 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2>Change or cancel your plan anytime.</h2>
                </div>
                <div className={styles.s2}>
                    <div className={styles.s21}>
                        {/* 4 box */}
                        <p className={plan1 == true ? `${styles.redbox} ${styles.boxactive}` : styles.redbox} onClick={handlePlan1}>Mobile</p>
                        <p className={plan2 == true ? `${styles.redbox} ${styles.boxactive}` : styles.redbox} onClick={handlePlan2}>Basic</p>
                        <p className={plan3 == true ? `${styles.redbox} ${styles.boxactive}` : styles.redbox} onClick={handlePlan3}>Standard</p>
                        <p className={plan4 == true ? `${styles.redbox} ${styles.boxactive}` : styles.redbox} onClick={handlePlan4}>Premium</p>
                    </div>

                    <div className={styles.s22}>
                        <p className={styles.cleft}>Monthly price</p>
                        <div className={styles.right}>
                            <p className={plan1 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan1}>₹ 149</p>
                            <p className={plan2 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan2}>₹ 199</p>
                            <p className={plan3 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan3}>₹ 499</p>
                            <p className={plan4 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan4}>₹ 649</p>
                        </div>
                    </div>
                    <div className={styles.hrline1}></div>

                    <div className={styles.s22}>
                        <p className={styles.cleft}>Video quality</p>
                        <div className={styles.right}>
                            <p className={plan1 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan1}>Good</p>
                            <p className={plan2 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan2}>Good</p>
                            <p className={plan3 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan3}>Better</p>
                            <p className={plan4 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan4}>Best</p>
                        </div>
                    </div>
                    <div className={styles.hrline1}></div>

                    <div className={styles.s22}>
                        <p className={styles.cleft}>Resolution</p>
                        <div className={styles.right}>
                            <p className={plan1 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan1}>480p</p>
                            <p className={plan2 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan2}>480p</p>
                            <p className={plan3 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan3}>1080p</p>
                            <p className={plan4 == true ? `${styles.redtext} ${styles.cnormal}` : styles.cnormal} onClick={handlePlan4}>4K+HDR</p>
                        </div>
                    </div>
                    <div className={styles.hrline1}></div>

                    <div className={styles.s23}>
                        <p className={styles.cleft1}>Devices you can use to watch</p>
                        <div className={styles.right1}>
                            <p className={styles.cnormal2}>
                                <div className={styles.device} onClick={handlePlan1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan1 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan1 == true ? styles.svgred : styles.svggrey}>Phone</p>
                                </div>


                                <div className={styles.device} onClick={handlePlan2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan2 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan2 == true ? styles.svgred : styles.svggrey}>Phone</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan3}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan3 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan3 == true ? styles.svgred : styles.svggrey}>Phone</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan4}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan4 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan4 == true ? styles.svgred : styles.svggrey}>Phone</p>
                                </div>
                            </p>
                            <p className={styles.cnormal2}>
                                <div className={styles.device} onClick={handlePlan1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan1 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan1 == true ? styles.svgred : styles.svggrey}>Tablet</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan2 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan2 == true ? styles.svgred : styles.svggrey}>Tablet</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan3}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan3 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan3 == true ? styles.svgred : styles.svggrey}>Tablet</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan4}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan4 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan4 == true ? styles.svgred : styles.svggrey}>Tablet</p>
                                </div>



                            </p>
                            <p className={styles.cnormal2}>
                                <div className={styles.device} onClick={handlePlan1}>
                                </div>
                                <div className={styles.device} onClick={handlePlan2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan2 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan2 == true ? styles.svgred : styles.svggrey}>Computer</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan3}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan3 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan3 == true ? styles.svgred : styles.svggrey}>Computer</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan4}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan4 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan4 == true ? styles.svgred : styles.svggrey}>Computer</p>
                                </div>
                            </p>
                            <p className={styles.cnormal2}>
                                <div className={styles.device} onClick={handlePlan1}>
                                </div>
                                <div className={styles.device} onClick={handlePlan2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan2 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan2 == true ? styles.svgred : styles.svggrey}>TV</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan3}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan3 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan3 == true ? styles.svgred : styles.svggrey}>TV</p>
                                </div>
                                <div className={styles.device} onClick={handlePlan4}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${plan4 == true ? styles.svgred : styles.svggrey}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className={plan4 == true ? styles.svgred : styles.svggrey}>TV</p>
                                </div>
                            </p>
                        </div>
                    </div>

                </div>
                <div className={styles.s24}>
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span>Terms of Use</span> for more details.</p>
                    <p>
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </p>
                </div>
                <button onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}

export default planform