import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <NavBar />
      <header className="hero">
        <h1>Welcome to Minnow</h1>
        <p>Your platform for access to quality education</p>
      </header>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#Courses">Courses</a></li>
        <li><a href="#demo">Learning Path</a></li>
        <li><a href="#glossary">Resources</a></li>
        <li><a href="#contact">Profile</a></li>
      </ul>
    </nav>
  );
}

export default App;
