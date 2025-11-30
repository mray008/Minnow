import { useState } from "react";
import "./AboutUs.css";
import didiImg from "./assets/didi-pic.jpg"; // <<— your file name
import cammyImg from "./assets/cammy-pic.png";
import jayImg from "./assets/jay-pic.jpg";
import leeImg from "./assets/lee-pic.png";
import madsImg from "./assets/mads-pic.jpg";
import stanImg from "./assets/stan-pic.jpg";
import RightBlueFish from './assets/blue-fish-right.png';
import LeftBlueFish from './assets/blue-fish-left.png';

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
>
  <div className="about-container" style={{ maxWidth: "100%", margin: "0 auto" }}>

        <h1 className="about-title">Meet the Team</h1>

      <div className="slide-box">
           <button onClick={prevSlide} className="arrow left-arrow">
                        <img src={LeftBlueFish} alt="Previous" className="arrow-img" />
                    </button>

          <div className="slide-content">
              <img src={current.img} alt={current.name} className="team-img" />
              <h2 className="team-name">{current.name}</h2>
              <p className="team-desc">{current.desc}</p>
          </div>

           <button onClick={nextSlide} className="arrow right-arrow">
                        <img src={RightBlueFish} alt="Next" className="arrow-img" />
                    </button>
      </div>
  </div>
</div>

    );
}