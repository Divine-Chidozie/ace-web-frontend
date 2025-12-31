import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MakeOfferSection from "../components/MakeOfferSection";
import Navbar from "../components/Navbar";
import styles from "../styles/Portfolio.module.css";
import goldtech from "../images/clients/goldtech.jpeg";
import surehero from "../images/clients/surehero.webp";
import yush from "../images/clients/yush.avif";
import pixiecut from "../images/clients/pixiecut.jpg";
import makvina from "../images/clients/makvina.jpeg";
import betaman from "../images/clients/betaman.jpeg";

export default function Portfolio() {
    let [currentlyEnlargedProject, setCurrentlyEnlargedProject] = useState(null);
    useEffect(() => {
        document.title = "Portfolio | Ace Digital Co";
    }, []);
    
    const handleCloseModal = e => {
        e.stopPropagation();
        setCurrentlyEnlargedProject(null)
    }

    return (
        <>
            <div className={styles["hero-background"]}>
                <Navbar />
                <HeroSection>
                    <h1 className={`hero_title shaded-outline`}>Our growing list of satisfied Customers</h1>
                    <p className={`hero_description ${styles["shaded-outline"]}`}>We may be young, but our talents are world-class</p>
                </HeroSection>
            </div>
            <div className={styles["clients-container"]}>
                {workProjects.map(project => <img key={project.id} src={ project.image } alt={ project.businessName }/>)}
            </div>
            <div className={styles["work-container"]}>
                <h2>Let our projects <span className={ styles.highlight }> do the talking.</span></h2>
                <div>
                    { workProjects.filter((_, i) => i <= 6).map(project => 
                        <div key={project.id} className={styles.card} onClick={
                            (e) => {
                                setCurrentlyEnlargedProject(project)
                            }
                        }>
                            <img src={project.image} alt="work project" />
                            <div className={styles["project-metadata"]}>
                                <p>
                                    <span className={styles.key}>Business</span>
                                    <span className={styles.value}>{ project.businessName }</span>
                                </p>
                                <p>
                                    <span className={styles.key}>Service offered</span>
                                    <span className={styles.value}>{ project.serviceOffered }</span>
                                </p>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
            <MakeOfferSection />
            <Footer />
            {
                currentlyEnlargedProject && 
                <div className="app-modal">
                    <div style={{position: "relative", display: "flex", flexWrap: "wrap", justifyContent: "center",
                        gap: "1rem",
                        backgroundColor: "white", 
                        padding: "1rem",
                        borderRadius: "1rem"
                    }}>
                        <div key={currentlyEnlargedProject.id} className={styles.card}>
                            <img src={currentlyEnlargedProject.image} alt="work project" />
                            <div className={styles["project-metadata"]}>
                            </div>
                        </div>
                        <div className={styles["project-metadata"]}>
                            <p>
                                <span className={styles.key}>Business</span>
                                <span className={styles.value}>{ currentlyEnlargedProject.businessName }</span>
                            </p>
                            <p>
                                <span className={styles.key}>Service offered</span>
                                <span className={styles.value}>{ currentlyEnlargedProject.serviceOffered }</span>
                            </p>
                            <p>
                                <span className={styles.key}>Business Description</span>
                                <span className={styles.value}>{ currentlyEnlargedProject.businessDescription}</span>
                            </p>
                            <p>
                                <span className={styles.key}>Business Url</span>
                                <span className={styles.value}><a href={ currentlyEnlargedProject.url } >{ currentlyEnlargedProject.businessName }</a></span>
                            </p>
                        </div>
                        <div className="close-modal" onClick={handleCloseModal}>X</div>
                    </div>
                </div>
            }
        </>
    );
}

const workProjects = [
    {
        id: "goldtech",
        image: goldtech,
        businessName: "Goldtech Steel and Aluminium",
        serviceOffered: "Social Media and Website and SEO",
        servicesDescription: "We provided a comprehensive digital marketing setup to elevate their online presence, SEO and lead generation.",
        url: "https://goldtech-nigeria.com"
    },
    
    {
        id: "yushabaya",
        image: yush,
        businessName: "Yush Abaya",
        businessDescription: "Quality & Affordable Veils, Abaya & jalabs",
        serviceOffered: "Google Business Account",
        servicesDescription: "We worked on their Google Buiness Profile, driving more traffic to their offerings.",
        url: "https://www.tiktok.com/@yush_abaya"
    },
    
    {
        id: "pixiecut",
        image: pixiecut,
        businessName: "Pixie Cut Promax",
        businessDescription: "Beauty, cosmetic & personal care.",
        serviceOffered: "Brand Management",
        servicesDescription: "We assisted them with page management and successfully established their Google Business Account, enhancing their visibility",
        url: "https://www.instagram.com/pixiecut_promax/"
    },

    {
        id: "surehero",
        image: surehero,
        businessName: "Sure Hero",
        businessDescription: "Medical Services",
        serviceOffered: "Google Business Account",
        servicesDescription: "We setup their Google Buisiness Account, helping them connect more with customers in their area.",
        url: "https://sureheroglobalhealth.org.ng"
    },
    
    {
        id: "makvina",
        image: makvina,
        businessName: "Makvina beauty",
        businessDescription: "Medical Services",
        serviceOffered: "Google Business Account",
        servicesDescription: "We created their Google Buisiness Account, ensuring they can showcase their services to potential clients.",
        url: "https://www.instagram.com/makvina_beautycare/"
    },
    
    {
        id: "betaman",
        image: betaman,
        businessName: "Beta Man Property",
        businessDescription: "Real Estate",
        serviceOffered: "Targeted and Sponsored advertisement",
        servicesDescription: "We implemented targeted advertising strategies, including sponsored ads, to maximize their reach and management.",
        url: "https://www.instagram.com/betaproperty_ng"
    }
]