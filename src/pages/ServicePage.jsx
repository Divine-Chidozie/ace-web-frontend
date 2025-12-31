import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryPackages from "../components/CategoryPackages";
import icon from "../images/icon.webp";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonials";
const categoriesData = [
  {
    name: "Content Marketing & SEO",
    icon: icon,
    packages: [
      {
        title: "Stepping Up Package",
        price: "N710000/Month",
        description: [
          "Maximum of 4 Website Pages with technical SEO",
          "Landing Page/Portfolio, SEO Optimized blog post",
          "SEO Keyword research 10",
          "PR Articles (300 - 500 words) ",
          "Google Business Profile Setup and Optimization"
        ],
      },
      {
        title: "Soft Life Package",
        price: "N5650000/Month",
        description: [
          "Maximum of 4 Website Pages with technical SEO",
          "Beautiful Landing Page/Portfolio",
          "10 SEO Keyword research",
          "20 SEO Optimized blog posts",
          "PR Articles (> 1000 words)",
          "Google Business Profile Setup and Optimization",
          "PR Aticles, Product Reviews & Press Releases",
          "Multi-channel brand digital PR campaigns"
        ],
      }
    ],
  },
  {
    name: "Brand Building & Management",
    icon: icon,
    packages: [
      {
        title: "Stepping Up Package",
        price: "N3000000 - N5500000/Month",
        description: [
          "Full Brand Identity Design (LOGO, Color Palette, Mockups)",
          "22 Social Media Design and content structure",
          "Motion Graphics Design",
          "Website (Hosting + Design + SEO Setup)",
          "Virtual Events (Promotion + Content + Graphics + Guests)",
          "1 creative Logo Design",
          "Social Media Page Revamp",
          "2D/3D Flyer Designs"
        ],
      },
      {
        title: "Side Hustle Package",
        price: "N880000/Month",
        description: [
          "Basic Brand Identity Design (Logo, Color Palette mockup)",
          "12 Social Media Design",
          "4 Short Videos or reels",
          "4 Page content + Basic SEO",
          "15 day Virtual Events (Promotion + Content + Graphics + Guests)",
          "1 creative Logo Design",
          "1 flyer design",
          "Social Media Page Revamp"
        ],
      }
    ],
  },
  {
    name: "Google Advertisement",
    icon: icon,
    packages: [
      {
        title: "Start Small Package",
        price: "N179200/Month",
        description: [
          "14-day basic Google display & Youtube adverts",
          "Custom audience targeting (demographics and audience",
          "Engaging headlines and compelling descriptions",
          "Ad performance tracking and monthly reporting",
        ],
      },
      {
        title: "Side Hustle Package",
        price: "N336000/Month",
        description: [
          "14-day cross-channel Google performance adverts",
          "Custom audience targeting (demographics and audience)",
          "Engaging headlines and compelling descriptions",
          "Ad performance tracking and monthly reporting",
        ],
      },
      {
        title: "Stepping Up Package",
        price: "N1200000/Month",
        description: [
          "30-day enhanced cross-channel Google Performance ads",
          "Custom audience targeting (demographics and interests)",
          "Engaging headlines and compelling descriptions",
          "Ad performance tracking and monthly reporting",
        ],
      },
      {
        title: "Soft Life Package",
        price: "3840000/Month",
        description: [
          "30-day integrated Google search engine ads",
          "30-day enhanced cross-channel Google Performance ads",
          "30 day YouTube bumper video adverts",
          "Custom audience targeting(demograpahics & interests)",
          "Engaging headlines and compelling descriptions",
          "Ad performance tracking and monthly reporting",
        ],
      },
      {
        title: "Odogwu Package",
        price: "Contact us for details",
        description: [
          "30-day integrated Google search engine ads",
          "30-day enhanced cross-channel Google Performance ads",
          "30 day YouTube bumper video adverts",
          "30-day retargeting ads to re-engage website users",
          "Custom audience targeting(demograpahics & interests)",
          "Engaging headlines and compelling descriptions",
          "Ad performance tracking and monthly reporting",
        ],
      },
    ],
  },
  {
    name: "Social Media Management",
    icon: icon,
    packages: [
      {
        title: "Start Small Package",
        price: "N96000/Month",
        description: [
          "Basic Content Calendar Planning",
          "Account Setup and Optimization",
          "Ten Social Media Flyers/Carousel Designs",
          "1 motion graphics",
        ],
      },
      {
        title: "Side Hustle Package",
        price: "192000 /Month",
        description: [
          "Bio Revamp",
          "Account Setup and Optimization",
          "Basic Content Calendar Planning",
          "Ten Social Media Flyers/Carousel Designs",          
          "Two short promotional brand videos or reels",
          "Engaging captions and hashtags for posts",
        ],
      },
      {
        title: "Stepping Up Package",
        price: "N320000/Month",
        description: [
          "Social Page Setup or revamp(bios, highlights)",
          "Complete content calendar planning and posting",
          "Twelve Social media flyer/carousel designs",
          "Four short promotional brand videos or reels",
          "Engaging captions and hastags for posts",
        ],
      },
      {
        title: "Soft Life Package",
        price: "768000/Month",
        description: [
          "Social Page Setup or revamp",
          "Complete content calendar planning and posting",
          "Twenty social media flyer/carousel designs",
          "Six short promotional videos or reels",
          "Two educational video shoots and editing",
          "Engagingcaptions and hashtags for posts",
          "Manage page promotions, highlights and stories",
        ],
      },
    ],
  },
];

function ServicePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Navbar />
      <CategoryPackages categories={categoriesData} activeIndex={activeIndex} />
      <Testimonial />
      <Footer />
    </>
  );
}

export default ServicePage;

