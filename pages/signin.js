import Navlogo from "../components/Navlogo"
import styles from '../styles/Signin.module.css'
import Footer from "../components/Footer"

const signin = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.content}>
                <Navlogo />
                <div className={styles.container}>
                    <div className={styles.form}>
                        <form>
                            <h1>Sign In</h1>
                            <input placeholder="Email or phone number" />
                            <input placeholder="Password" />
                            <button>Sign In</button>
                            <div className={styles.forms1}>
                                <div>
                                    <input type="checkbox" id="remme" name="Remember Me" value="Remember Me" />
                                    <label for="reme"> Remember me</label><br></br>
                                </div>
                                <p>Need help?</p>
                            </div>
                        </form>
                        <div className={styles.forms2}>
                            <h1>New to Netflix? <span>Sign up now</span></h1>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <span>Learn more.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default signin