import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import styles from '../styles/Bootcamp.module.css';
import john from "../images/staff/John-Ibiwoye.webp";
import daniel from "../images/staff/Daniel-Oyerinde.webp";
import divine from "../images/staff/Divine-Igwe.webp";
import { useEffect } from 'react';

export default function Bootcamp() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                }
                else {
                    entry.target.style.opacity = 0;
                }
            });
        })
        const paragraphs = document.querySelector("main").querySelectorAll("p, li, iframe");
        paragraphs.forEach(child => observer.observe(child));
        document.title = "Coding Bootcamp for Kids | Ace Digital Co";
        return () => {
            paragraphs.forEach(child => observer.unobserve(child));
        }
    }, [])
    return (
        <>
            <div className={styles["hero-background"]}>
                <Navbar />
                <HeroSection>
                    <h2 className={`hero_title ${styles["shaded-outline"]}`}>This Holiday, Give Your Child The Ace</h2>
                    <p className={`hero_description ${styles["shaded-outline"]}`}>Learn Web Development With Our Coding Bootcamp!</p>
                </HeroSection>
            </div>
            <main className={styles["bootcamp-container"]}>
                <svg viewBox="0 0 380 1900" xmlns="http://www.w3.org/2000/svg">
                    <text x="80" y="185" style={{"font-size": "50px"}} rotate="5deg" fill="var(--secondary-color)">{"</>"}</text>
                    <text x="140" y="380" style={{"font-size": "80px", "transform-origin":"50% 20%", "transform-box": "fill-box", transform:"rotate(30deg)"}} rotate="-15deg" fill="var(--accent-color)">{"P == NP"}</text>
                    <text x="40" y="505" style={{"font-size": "40px", "transform-origin":"50% 20%", "transform-box": "fill-box", transform:"rotate(-5deg)"}} rotate="15deg" fill="var(--secondary-color)">{"<code/>"}</text>
                    <text x="100" y="880" style={{"font-size": "30px", "transform-origin":"50% 20%", "transform-box": "fill-box", transform:"rotate(20deg)"}} fill="var(--accent-color)">{"<animation/>"}</text>
                    <text x="30" y="1380" style={{"font-size": "80px"}} fill="var(--accent-color)">{"<math/>"}</text>
                    <text x="20" y="1800" style={{"font-size": "50px", "transform-origin":"50% 20%", "transform-box": "fill-box", transform:"rotate(-30deg)"}} fill="var(--secondary-color)">{"<svg/>"}</text>
                </svg>

                <h1 className={styles["sub-heading"]}>Your Child’s Future Depends On What You Do In The Next 10 Minutes</h1>

                <h2 className={styles["sub-heading"]}>
                    <p>While other kids waste their holidays on cartoons and textbooks…</p>
                    <p>Your child could be learning digital skills that schools will NEVER teach.</p>
                </h2>

                <p><b><i>Dear Caring Parent,</i></b></p>

                <p>Right now, your child is on holiday.</p>

                <p>And I know the thought has crossed your mind:</p>
                <p>“Should I send them for extra lessons?”</p>

                <p><em>STOP.</em></p>

                <p>Before you spend another naira on holiday lessons that recycle the same old subjects…</p>

                <p>Ask yourself:</p>
                <ul className={styles.list}>
                    <li>👉 What if your 12-year-old could build a fully functional website?</li>
                    <li>👉 What if your teenager could design a digital portfolio that impresses universities and scholarship boards?</li>
                    <li>👉 What if your child could start creating real-world projects that open doors to global opportunities?</li>
                </ul>
                <p>While other parents are pushing kids into the same routine…</p>
                <p>You could be giving your child superpowers.</p>

                <div className={styles.container}>
                    <p>The Harsh Truth About The Future</p>

                    <p>By 2030, 85% of jobs that will exist haven’t even been invented yet.</p>

                    <p>And the skill that will matter most?</p>

                    <p className={styles.highlight}>CODING.</p>

                    <p>Not algebra.</p>
                    <p>Not memorizing poems.</p>

                    <p>But the ability to build, create, and innovate in the digital world.</p>

                    <p>The sad reality?</p>

                    <p>95% of Nigerian children are still stuck in outdated education.</p>

                    <p>They’re being prepared for jobs that won’t exist.</p>

                    <p>They’re learning to be employees in a world that rewards creators.</p>

                    <p>They’re following instructions in a world that pays innovators.</p>


                    <p>Meanwhile, kids abroad are already coding.</p>
                    <p>They’re building apps, launching websites, and setting up businesses—before they even finish secondary school.</p>

                    <p>And the gap keeps widening.</p>
                    <p>If you don’t act now… your child may be left behind.</p>
                </div>

                <div className={styles.container}>
                    <h2 className={styles["sub-heading"]}>“But Isn’t Coding Too Advanced For My Child?”</h2>
                    <p>That’s what many parents think.</p>
                    <p>But here’s the truth:</p>
                    <p>Children learn coding 10X faster than adults.</p>
                    <p>Their brains are wired for it.</p>
                    <p>They’re already navigating your phone better than you.</p>
                    <p>All they need is guidance.</p>
                    <p>And that’s exactly what the Ace Digital Co Coding Bootcamp provides.</p>
                </div>

                <div className={styles.container}>
                    <h2 className={styles["sub-heading"]}>INTRODUCING: THE ACE DIGITAL CODING BOOTCAMP</h2>

                    <p>The only holiday program designed to turn children (ages 6–15) into future-ready web developers in just 4 weeks.</p>

                    <p>Forget boring holiday lessons.</p>
                    <p>Forget “extra maths classes.”</p>

                    <p>This holiday, give your child a gift that lasts a lifetime.</p>


                    <p>What Your Child Will Learn in 4 weeks</p>

                    <ul className={styles.list}>
                        <li className={styles.card}>
                            <dl>
                                <dt>HTML</dt>
                                <dd>Structure and build the foundation of websites.</dd>
                            </dl>
                        </li>
                        <li className={styles.card}>
                            <dl>
                                <dt>CSS</dt>
                                <dd>Design stunning, modern, responsive web pages.</dd>
                            </dl>
                        </li>
                        <li className={styles.card}>
                            <dl>
                                <dt>JavaScript</dt>
                                <dd>Add interactivity and bring websites to life.</dd>
                            </dl>
                        </li>
                    </ul>

                    <ul className={styles.card + ' ' + styles.list}><h3>Every single class includes:</h3>
                        <li>✅ Live interactive lessons (2 hours, 3 times a week)</li>
                        <li>✅ Practical assignments</li>
                        <li>✅ Direct feedback from instructors</li>
                        <li>✅ Community support</li>
                        <li>✅ Live Q&A sessions</li>
                    </ul>

                    <p>By the end of the bootcamp, your child will have created their own websites and built a portfolio to showcase.</p>


                    <h3>Exclusive Bonuses (FREE When You Enroll Today)</h3>
                    <ul>
                        <li>🎁 Certificate of Participation (perfect for portfolios & scholarships)</li>
                        <li>🎁 Guidance on creating a digital portfolio for school & competitions</li>
                        <li>🎁 Online safety & digital responsibility training</li>
                    </ul>
                </div>

                <div className={styles.container}>
                    <h2 className={styles["sub-heading"]}>What your child will be building.</h2>
                    <div className={styles["iframe-container"]}>
                        <figure>
                            <iframe title="Portfolio" allowFullScreen loading="lazy" src="https://alsiam.github.io/web-projects/portfolio/" ></iframe>
                            <figcaption>Portfolio</figcaption>
                        </figure>
                        <figure>
                            <iframe title="Calculator App" loading="lazy" src="https://alsiam.github.io/web-projects/calculator/"></iframe>
                            <figcaption>Calculator</figcaption>
                        </figure>
                        <figure>
                            <iframe title="Simple Blog" loading="lazy" src="https://alsiam.github.io/web-projects/simple-blog/"></iframe>
                            <figcaption>Simple Blog page</figcaption>
                        </figure>
                    </div>
                </div>

                <div className={styles.container}>
                    <h2 className={styles["sub-heading"]}>The Real Value</h2>

                    <p>If you paid for coding bootcamps in Nigeria today, you’d spend:</p>

                    <p>₦80,000 – ₦100,000 (minimum).</p>

                    <p>But because Ace Digital Co believes in accessibility, we’re offering this entire 4 weeks program…</p>

                    <p>Not for ₦100,000.</p>
                    <p>Not even ₦50,000.</p>

                    <p>But just <span className={styles["text-huge"]}>₦25,000</span> for early-bird parents.</p>

                    <p>Yes, ₦25,000 to unlock your child’s digital future.</p>


                    <h3 className={styles["sub-heading"]}>Why So Affordable?</h3>

                    <p>Because we’re on a mission.</p>
                    <p>Too many Nigerian kids are missing out on the opportunities of the digital economy.</p>
                    <p>This is our way of bridging that gap.</p>

                    <h3>But here’s the thing:</h3>

                    <p>🚨 ₦25,000 early-bird price is only for the first 50 parents.</p>
                    <p>🚨 After that, the price goes up to ₦50,000.</p>

                    <p>Why? Once parents see the websites their kids are building, demand will explode.</p>
                    <p>And to maintain quality, we must limit enrollment.</p>

                    <p>So, two choices:</p>

                    <p>Wait and pay double later</p>

                    <p>Or act now and secure your child’s future for just ₦25,000</p>


                    <p>Choose wisely.</p>


                    <p><em>SIGN UP NOW – Don’t Delay</em></p>

                    <p>Right now, as you’re reading this… children across the world are:</p>

                    <p>Building websites</p>

                    <p>Launching projects</p>

                    <p>Preparing for the digital future</p>


                    <p>What is your child doing?</p>
                </div>

                <div className={styles.container}>
                    <h3 className={styles["sub-heading"]}>If you wait:</h3>
                    <ul className={styles.list}>
                        <li>❌ Price rises to ₦50,000</li>
                        <li>❌ Enrollment closes at capacity</li>
                        <li>❌ Another holiday wasted on nothing new</li>
                    </ul>

                    <h3 className={styles["sub-heading"]}>But if you act now:</h3>
                    <ul className={styles.list}>
                        <li>✅ Secure ₦25,000 early-bird price</li>
                        <li>✅ Get your child into Nigeria’s most exciting coding bootcamp</li>
                        <li>✅ Watch them build future-proof skills and real projects</li>
                        <li>✅ Give them the gift of digital literacy</li>
                    </ul>
                </div>
                <p>The choice is yours.
                But you must act <em>NOW.</em></p>


                <div className={styles.container}>
                    <h2 className={styles["sub-heading"]}>When Is This Bootcamp Starting?</h2>

                    <dl>
                        <dt>📅 Date:</dt> <dd>Monday 25th August – Thursday 18th September, 2025</dd>
                        <dt>📍 Where:</dt> <dd>WhatsApp & Telegram Group</dd>
                        <dt>💻 Laptop Needed?</dt> <dd>No. A phone or tablet is enough.</dd>
                    </dl>
                </div>

                <div className={styles.container}>
                    <h2 className={styles["sub-heading"]}>How To Secure Your Child’s Spot (Before It’s Too Late)</h2>

                    <ol className={styles["list"]}>
                        <li>
                            <p>Pay ₦25,000 to: Account Name: Ace Digital Co</p>
                            <p>Bank:</p>
                            <p>Account Number:</p>
                        </li>

                        <li>
                            Click the link below to send your receipt on WhatsApp:
                            👉 Click <a className={styles.highlight} href="https://wa.me/2349030128249" target='_blank' rel='noreferrer'> Here</a> To Send Receipt On WhatsApp
                        </li>
                    </ol>
                    <em>🔥 Don’t let your child miss this. Their future starts with the skills they gain today.</em>
                </div>

                <div className={styles["who-are-we"] + " " +  styles.container}>
                    <h2 className={styles["sub-heading"]}>Who are we?</h2>
                    <div>
                        <p> <span className={styles.highlight}>Ace Digital Co</span></p>
                        <p>We are a digital marketing agency with a passion for teaching and empowering the next generation of tech-savvy individuals. Our team consists of experienced professionals who have worked in various aspects of web development and digital marketing.</p>
                        <p>We believe that coding is not just a skill but a way of thinking that can benefit children in all areas of their lives. Our mission is to make coding accessible and enjoyable for young learners, fostering a love for technology and innovation.</p>

                        <p>Enroll your child in our comprehensive coding bootcamp designed for young learners. Our program offers hands-on experience in web development, teaching essential skills in HTML, CSS, and JavaScript.</p>
                        <p>Whether your child is a beginner or has some coding experience, our bootcamp provides a supportive environment to enhance their skills. With interactive lessons and real-world projects, students will gain confidence and proficiency in coding.</p>
                        <div>
                            <p className={styles.highlight}>Our Instructors</p>
                            <ul className={styles["instructor-list"]}>
                                <li>
                                    <figure>
                                        <img className={styles.img} src={john} alt="Web developer" width={200} height={200} />
                                        <figcaption>
                                            <p>John Ibiwoye</p>
                                            <p>Web Developer</p>
                                        </figcaption>
                                    </figure>
                                </li>
                                
                                <li>
                                    <figure>
                                        <img className={styles.img} src={daniel} alt="Web developer" width={200} height={200} />
                                        <figcaption>
                                            <p>Daniel Oyerinde</p>
                                            <p>Web Developer</p>
                                        </figcaption>
                                    </figure>
                                </li>
                                
                                <li>
                                    <figure>
                                        <img className={styles.img} src={divine} alt="Web developer" width={200} height={200} />
                                        <figcaption>
                                            <p>Divine Igwe</p>
                                            <p>Web Developer</p>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}