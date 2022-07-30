import React, { useState } from 'react'
import styles from './Planform.module.css'
import SignupNav from './SignupNav'
const planform = () => {
    const [plan1, setplan1] = useState(true)
    const [plan2, setplan2] = useState(false)
    const [plan3, setplan3] = useState(false)
    const [plan4, setplan4] = useState(false)
    return (
        <div className={styles.outer}>
            <SignupNav />
            <div className={styles.hrline}></div>
            <div className={styles.inner}>
                <p className={styles.step}>STEP<span>1</span>OF<span>3</span></p>
                <h1>Choose the plan that’s right for you</h1>
                <div className={styles.s11}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2> Watch all you want. Ad-free.</h2>
                </div>
                <div className={styles.s11}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2>Recommendations just for you.</h2>
                </div>
                <div className={styles.s11}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2>Change or cancel your plan anytime.</h2>
                </div>

                <div className={styles.s2}>
                    <div className={styles.s21}>
                        {/* 4 box */}
                        <p className={styles.redbox}>Mobile</p>
                        <p className={styles.redbox}>Basic</p>
                        <p className={styles.redbox}>Standard</p>
                        <p className={styles.redbox}>Premium</p>
                    </div>
                    <div className={styles.s22}>
                        <p className={styles.cleft}>Monthly price</p>
                        <div className={styles.right}>
                            <p className={plan1 == true ? `${styles.cnormal} ${styles.active}` : styles.cnormal}>₹ 149</p>
                            <p className={styles.cnormal}>₹ 199</p>
                            <p className={styles.cnormal}>₹ 499</p>
                            <p className={styles.cnormal}>₹ 649</p>
                        </div>
                    </div>
                    <div className={styles.hrline1}></div>

                    <div className={styles.s22}>
                        <p className={styles.cleft}>Video quality</p>
                        <div className={styles.right}>
                            <p className={styles.cnormal}>Good</p>
                            <p className={styles.cnormal}>Good</p>
                            <p className={styles.cnormal}>Better</p>
                            <p className={styles.cnormal}>Best</p>
                        </div>
                    </div>
                    <div className={styles.hrline1}></div>

                    <div className={styles.s22}>
                        <p className={styles.cleft}>Resolution</p>
                        <div className={styles.right}>
                            <p className={styles.cnormal}>480p</p>
                            <p className={styles.cnormal}>480p</p>
                            <p className={styles.cnormal}>1080p</p>
                            <p className={styles.cnormal}>4K+HDR</p>
                        </div>
                    </div>
                    <div className={styles.hrline1}></div>

                    <div className={styles.s23}>
                        <p className={styles.cleft1}>Devices you can use to watch</p>
                        <div className={styles.right1}>
                            <p className={styles.cnormal2}>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Phone</p>
                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Phone</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Phone</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Phone</p>

                                </div>
                            </p>
                            <p className={styles.cnormal2}>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tablet</p>
                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tablet</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tablet</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tablet</p>
                                </div>
                            </p>
                            <p className={styles.cnormal2}>
                                <div className={styles.device}>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Computer</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Computer</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Computer</p>
                                </div>
                            </p>
                            <p className={styles.cnormal2}>
                                <div className={styles.device}>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tv</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tv</p>

                                </div>
                                <div className={styles.device}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tv</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>


                <div className={styles.s24}>
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span>Terms</span> of Use for more details.</p>
                    <p>
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </p>
                </div>


                <div className={styles.s24}>
                    <button className={styles.button}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default planform