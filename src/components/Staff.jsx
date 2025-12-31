import { motion } from "framer-motion";
import "./AboutUsMedia.css";

import AbdulwarithAkorede from "../images/staff/Abdulwarith-Akorede.webp";
import AdeayoOlukoya from "../images/staff/Adeayo-Olukoya.webp";
import AdewumiAjayi from "../images/staff/Adewumi-Ajayi.webp";
import DanielOyerinde from "../images/staff/Daniel-Oyerinde.webp";
import DivineIgwe from "../images/staff/Divine-Igwe.webp";
import IfeoluwaAmos from "../images/staff/Ifeoluwa-Amos.webp";
import IfeoluwaTajudeen from "../images/staff/Ifeoluwa-Tajudeen.webp";
import IsmaelMohammed from "../images/staff/Ismael-Mohammed.webp";
import JohnIbiwoye from "../images/staff/John-Ibiwoye.webp";
import KabirIdris from "../images/staff/Kabir-Idris.webp";
import LanreOwoyemi from "../images/staff/Lanre-Owoyemi.webp";
import OlowookerePelumi from "../images/staff/Olowookere-Pelumi.webp";
import OmowumiAtiwaye from "../images/staff/Omowumi-Atiwaye.webp";
import YetundeOlukoya from "../images/staff/Yetunde-Olukoya.webp";
import catherine from "../images/staff/catherine.jpg";
import mathewadebayo from "../images/staff/mathewadebayo.jpg";
import moses from "../images/staff/moses.jpg";
import beauty from "../images/staff/beauty.jpg";
import graceoluwadamilola from "../images/staff/graceoluwadamilola.jpg";
import peterayodele from "../images/staff/peterayodele.jpg";
import sadiqahmed from "../images/staff/sadiqahmed.jpg";
import vigaledubon from "../images/staff/vigaledubon.jpg";

const Staff = () => {
  const team = [
    {
      name: "Yetunde Olukoya",
      role: "CEO & Digital Marketing Consultant",
      img: YetundeOlukoya,
    },
    {
      name: "Adeayo Olukoya",
      role: "Virtual Assitant & Project Manager",
      img: AdeayoOlukoya,
    },

    {
      name: "Ifeoluwa Amos",
      role: "Voice Over Artist & Communication Managaer",
      img: IfeoluwaAmos,
    },
    {
      name: "Abdulwarith Akorede",
      role: "Motion & Brand Identity Designer",
      img: AbdulwarithAkorede,
    },
    {
      name: "Ismael Mohammed",
      role: "Social Media Manager & Video Editior",
      img: IsmaelMohammed,
    },
    {
      name: "Adewumi Ajayi",
      role: "Content & Ghost Writer",
      img: AdewumiAjayi,
    },
    { name: "Daniel Oyerinde", role: "Web Developer", img: DanielOyerinde },
    { name: "Divine Igwe", role: "Frontend Developer", img: DivineIgwe },
    {
      name: "Omowumi Atiwaye",
      role: "Project Manager & Content Writer",
      img: OmowumiAtiwaye,
    },
    {
      name: "Kabir Idris",
      role: "Brand Marketing Strategist & Content Marketer",
      img: KabirIdris,
    },
    {
      name: "Ifeoluwa Tajudeen",
      role: "Content Creator",
      img: IfeoluwaTajudeen,
    },

    { name: "Lanre Owoyemi", role: "Social Media Manager", img: LanreOwoyemi },

    { name: "John Ibiwoye", role: "Web Developer", img: JohnIbiwoye },

    {
      name: "Olowookere Pelumi",
      role: "Social Media Manager",
      img: OlowookerePelumi,
    },

    {
      name: "Catherine",
      role: "Social Media Manager",
      img: catherine,
    },

    { name: "Moses", role: "Content Creator", img: moses },
    { name: "Beauty", role: "Content Creator", img: beauty },

    {
      name: "Grace Oluwadamilola",
      role: "Social Media Manager",
      img: graceoluwadamilola,
    },
    { name: "Mathew Adebayo", role: "SEO Specialist", img: mathewadebayo },

    {
      name: "Peter Ayodele",
      role: "Graphic Design",
      img: peterayodele,
    },

    {
      name: "Sadiq Ahmed",
      role: "Graphic Design",
      img: sadiqahmed,
    },

    {
      name: "Vigale Dubon",
      role: "Graphic Designer",
      img: vigaledubon,
    },
  ];

  return (
    <div className="container my-5 px-3 team-container">
      <h3 className="text-center mb-4 py-3 fs-2 team-heading">Meet the Team</h3>
      <div className="row g-4 justify-content-center mt-4 team-inner-container">
        {team.map((member, idx) => (
          <motion.div
            className="col-6 col-sm-4 col-md-3 text-center team-container-div"
            key={idx}
            initial={{ opacity: 0, y: 50 }} // start invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // animate to visible and correct position
            transition={{ delay: idx * 0.1, duration: 0.5 }} // stagger effect
          >
            <img
              src={member.img}
              alt={member.name}
              className="img-fluid rounded mb-2"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <h5>{member.name}</h5>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
