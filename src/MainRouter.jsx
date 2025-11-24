import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import "./NavBar.css";
import aquariumBg from './assets/Background.jpeg';
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";
import ContactUs from "./ContactUs.jsx";

//  NavBar component
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#Courses">Courses</a></li>
        <li><a href="#demo">Games</a></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

// Hero component
function Hero({ onLoginClick }) {
  return (
    <header className="hero">
      <h1 style={{ color: "#3B2F2F", fontStyle: "italic"}}>Welcome to Minnow</h1>
      <p style={{ color: "#3B2F2F"}}>Your platform for access to quality education</p>
      <p className="hero-subtext">
        Minnow is an educational platform that makes learning accessible, inclusive, and engaging for students of all levels. 
        With adaptive lessons, gamified modules, and offline capabilities, it helps students learn anytime, anywhere while empowering teachers and parents to track progress.
        Explore our platform to discover the learning resources we provide, and create an account to unlock your personalized educational experience.
      </p>
      {/*<button onClick={onLoginClick}>Go to Login</button>*/}
    </header>
  );
}

//  MainRouter component
export default function MainRouter() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router basename="/Minnow">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            !showLogin ? (
              <div
                className="landing"
                style={{
                  backgroundImage: `url(${aquariumBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
                  minHeight: "100vh",
                  paddingBottom: "40px",
                }}
              >
                <Hero onLoginClick={() => setShowLogin(true)} />
                <div style={{ marginTop: "150px" }}>
          <Footer />
        </div>
              </div>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}



