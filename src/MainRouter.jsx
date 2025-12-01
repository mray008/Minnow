import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx"; // AI added this line
import "./NavBar.css";
import background from './assets/Background.jpeg';
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";
import ContactUs from "./ContactUs.jsx";
import minnowLogo from "./assets/MinnowLogo2.png";
import FakeChat from "./FakeChat.jsx";
import ChatbotWrapper from "./ChatbotWrapper";
import MatchingGame from "./MatchingGame.jsx";
import Games from "./Games.jsx";
import StudentDashboard from "./StudentDashboard.jsx";
import EducatorDashboard from "./EducatorDashboard.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import Courses from "./Courses.jsx";
import BingoGame from "./BingoGame.jsx";

function TopHeader() {
  return (
    <header className="top-header">
      <img src={minnowLogo} alt="Minnow Logo" className="top-header-logo" />
      <h1 className="top-header-title">Minnow</h1>
    </header>
  );
}

//  NavBar component
function NavBar({ user }) {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        // scrolling down
        setHidden(true);
      } else if (currentScroll < lastScroll.current) {      /* ChatGpt couldn't even help me out with this one but I'm leaving it here in case someone knows what to do*/
        // scrolling up
        setHidden(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/about">About Us</Link></li>

        {!user && <li><Link to="/login">Login</Link></li>}
        {user?.role === "student" && <li><Link to="/student-dashboard">Student Dashboard</Link></li>}
        {user?.role === "educator" && <li><Link to="/educator-dashboard">Educator Dashboard</Link></li>}
        {user?.role === "admin" && <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>}

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
      <div className="hero-logo">
        <img src={minnowLogo} alt="Minnow logo" className="hero-logo-img" />
      </div>
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
const [user, setUser] = useState({ name: "TestUser" });

  return (
    <Router basename="/Minnow">
      <div className="background-wrapper">
      <TopHeader />
      <NavBar user={user} />

      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              !showLogin ? (
                <div
                  className="landing"
                >
                  <Hero onLoginClick={() => setShowLogin(true)} />
                </div>
              ) : (
                <Login setUser={setUser} />
              )
            }
          />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register />} /> // 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/games" element={<Games user={user} />} />
          <Route path="/matching-game" element={<MatchingGame />} />
          <Route path="/student-dashboard" element={<StudentDashboard user={user} />} />
          <Route path="/educator-dashboard" element={<EducatorDashboard user={user} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard user={user} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/BingoGame" element = {<BingoGame /> } />
        </Routes>
      </div>
      <ChatbotWrapper />
      <Footer />
      </div>
    </Router>
  );
}

// The register element was added by AI


