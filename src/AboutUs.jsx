import { useState } from "react";
import "./AboutUs.css";
import didiImg from "./assets/didi-pic.jpg"; // <<— your file name
import cammyImg from "./assets/cammy-pic.png";
import jayImg from "./assets/jay-pic.jpg";
import leeImg from "./assets/lee-pic.png";
import madsImg from "./assets/mads-pic.jpg";
import stanImg from "./assets/stan-pic.jpg";
import Footer from "./Footer.jsx";
import aquariumBg from './assets/aquarium-bg.avif';

export default function AboutUs() {
    const slides = [
        {
            img: didiImg,
            name: "Didi Kone-Sow",
            desc: "Short description about Didi."
        },
        {                                           /* Used ChatGPT to help me construct the slides when I got stuck. */
            img: cammyImg,
            name: "Cameron Montgomery",
            desc: "Short description about Cammy."
        },
        {
            img: jayImg,
            name: "Jayson Yates",
            desc: "Short description about Jay."
        },
        {
            img: leeImg,
            name: "Lee Klaus",
            desc: "Short description about Lee."
        },
        {
            img: madsImg,
            name: "Maddie Ray",
            desc: "Short description about Mads."
        },
        {
            img: stanImg,
            name: "Stanley Synenko",
            desc: "Short description about Stan."
        }
    ];

    const [index, setIndex] = useState(0);

    const nextSlide = () =>
        setIndex((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const current = slides[index];

    return (
        <div
  className="landing"
  style={{
    backgroundImage: `url(${aquariumBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",      // full viewport width
    minHeight: "100vh",  // full viewport height
    paddingBottom: "40px",
    boxSizing: "border-box", // includes padding
  }}
>
  <div className="about-container" style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div className="slide-box">
          <button onClick={prevSlide} className="arrow left-arrow">❮</button>

          <div className="slide-content">
              <img src={current.img} alt={current.name} className="team-img" />
              <h2 className="team-name">{current.name}</h2>
              <p className="team-desc">{current.desc}</p>
          </div>

          <button onClick={nextSlide} className="arrow right-arrow">❯</button>
      </div>

      <div style={{ marginTop: "150px" }}>
          <Footer />
      </div>
  </div>
</div>

    );
}