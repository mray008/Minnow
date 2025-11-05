import { useState } from "react";
import StudentDashboard from "./StudentDashboard.jsx";
import EducatorDashboard from "./EducatorDashboard.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

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

function Hero() {
  return (
    <header className="hero">
      <h1>Welcome to Minnow</h1>
      <p>Your platform for access to quality education</p>
    </header>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  // Update this with your Render backend URL
  const BACKEND_URL = "https://minnow.onrender.com";

  const handleLogin = async (username, password) => {
    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data); // logged-in user
      } else {
        const err = await res.json();
        alert(err.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Unable to connect to server.");
    }
  };

  const handleLogout = () => setUser(null);

  // Show login if not logged in
  if (!user) return <LoginForm onLogin={handleLogin} />;

  // Show dashboard based on role
  switch (user.role) {
    case "student":
      return <StudentDashboard user={user} onLogout={handleLogout} />;
    case "educator":
      return <EducatorDashboard user={user} onLogout={handleLogout} />;
    case "admin":
      return <AdminDashboard user={user} onLogout={handleLogout} />;
    default:
      return <LoginForm onLogin={handleLogin} />;
  }
}

// --------------------
// Login form component
// --------------------
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
