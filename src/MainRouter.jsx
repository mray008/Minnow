import { useState } from "react";
import Login from "./Login.jsx";
import "./NavBar.css";
import aquariumBg from './assets/aquarium-bg.avif';

// ✅ NavBar component
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#Courses">Courses</a></li>
        <li><a href="#demo">Games</a></li>
        <li><a href="#glossary">About Us</a></li>
        <li><a href="#contact">Register/Login</a></li>
      </ul>
    </nav>
  );
}

// ✅ Hero component
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
      <button onClick={onLoginClick}>Go to Login</button>
    </header>
  );
}

// ✅ MainRouter component
export default function MainRouter() {
  const [showLogin, setShowLogin] = useState(false);

  if (!showLogin) {
    return (
      <div className="landing"
      style={{
          backgroundImage: `url(${aquariumBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // full viewport height
        }}
      >
        <NavBar />
        <Hero onLoginClick={() => setShowLogin(true)} />
        <Footer />
      </div>
    );
  }

  return <Login />;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Minnow. All rights reserved.</p>
        <p>Empowering students with accessible, engaging, and inclusive learning experiences.</p>
      </div>
    </footer>
  );
}
