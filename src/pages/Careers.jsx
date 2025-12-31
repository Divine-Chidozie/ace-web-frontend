import { useEffect } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import styles from "../styles/Careers.module.css";

const positions = [
    /*{
        id: 1,
        department: "Engineering",
        roleTitle: "Software Developer",
        location: "Nigeria",
        employmentType: "Full time",
        employmentPresence: "Remote"
    }*/
];

export default function Careers() {
    useEffect(() => {
        document.title = "Careers | Ace Digital Co";
    }, []);
    return (
        <>
            <div className={`hero-background ${styles["hero-background"]}`}>
                <Navbar />
                <HeroSection>
                    <h1 className={`hero_title shaded-outline`}>Join Our Fast Growing Team</h1>
                    <p className={`hero_description ${styles["shaded-outline"]}`}>Explore remote-friendly opportunities and </p>
                    <a href={`#${styles["position-section"]}`} className="btn primary_button">See Open Position</a>
                </HeroSection>
            </div>
            
            <div id={styles["our-culture-section-container"]}>
                <div id={styles["our-culture-section"]} className={styles.container}>
                    <div id={styles["our-culture-heading"]}>
                        <h2>Our Culture</h2>
                        <div>People First, Always</div>
                    </div>
                    <div id={styles["our-culture-content"]}>
                        <h3>Hey There</h3>
                        <p className={styles["coloured-text"]}>
                            This is not a typical startup. Fueled by passion for businesses both small and large, we at Ace Digital Co are 
                            on a mission to provide the best digital advertisement and marketing services to businesses 
                            all over the world. Fast growing and still going we intend to keep delivering quality value 
                            for years to come.
                        </p>
                        <p>As a team, we are always looking for opportunities to grow confidence through overcoming challenges and enjoy
                            the pleasure of the learning curve. We believe in empowering each with trust and facilitate transparent 
                            communication. No politics, only a group of people who are always "on something"-- whether it's learning 
                            a skill, running a new project, content creation or exploring new responsibilities.
                        </p>
                        <p>
                            We enjoy the freedom of asynchronous communication. It allows us to reduce meeting and instead thoughtfully 
                            create documentations. We see it as an opportunity to be owners of how we work and build a flexible schedule.
                        </p>
                        <p className={styles["coloured-text"]}>And yes, we are fully remote.</p>
                    </div>
                </div>
            </div>

            <div id={styles["values-section-container"]}>
                <div id={styles["values-section"]} className={styles.container}>
                    <div className={styles["values-container"]}>
                        <h2>Our Values</h2>
                        <p>What we stand for every day.</p>
                    </div>
                    <div className={styles["values-container"]}>
                        <ion-icon className="icon" name="book-outline"></ion-icon>
                        <h3>An Open Book</h3>
                        <div className={styles["text-small"]}>
                            <p>We are open as a team and as a product.</p>
                            <p>We don't put walls up until it's necessary.</p>
                            <p>We become better when we share information.</p>
                            <p>We are open to diversity of information.</p>
                        </div>
                    </div>
                    <div className={styles["values-container"]}>
                        <ion-icon className="icon" name="globe-outline"></ion-icon>
                        <h3>Play as a Team</h3>
                        <div className={styles["text-small"]}>
                            <p>Play is a creators tool.</p>
                            <p>Life is short. Let's build something meaningful.</p>
                            <p>Great teams build great things together.</p>
                            <p>We keep those standard</p>
                        </div>
                    </div>
                    <div className={styles["values-container"]}>
                        <ion-icon className="icon" name="heart-outline"></ion-icon>
                        <h3>We are kind</h3>
                        <div className={styles["text-small"]}>
                            <p>We can be honest and kind.</p>
                            <p>We can have high standard and be kind</p>
                            <p>We can say no and be kind.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id={styles["position-section"]}>
                <h2> Open Positions ({ positions.length })</h2>
                <ul className={styles.list}>
                    {positions.length === 0 ? 
                        <span>
                            We appreciate your interest in Ace Digital Co, but there are no available positions at the moment.
                        </span>
                        :
                        positions.sort((a, b) => a - b).map(position => 
                            <li key={position.id} className={styles["role-list-item"]}>
                                <p className={styles["text-bold"]}>{position.roleTitle}</p>
                                <p className={styles["role-info"] + " " + styles["text-small"]}>
                                    <span>{position.department} | </span>
                                    <span>{position.location} | </span>
                                    <span>{position.employmentType} | </span>
                                    <span>{position.employmentPresence}</span>
                                </p>
                            </li>
                        )
                    }
                </ul>
            </div>
            <Footer />
        </>
    )
}