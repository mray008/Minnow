import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StudentDashboard from "./StudentDashboard.jsx";
import EducatorDashboard from "./EducatorDashboard.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    const res = await fetch("https://minnow-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      setUser(data); // set logged-in user
    } else {
      alert("Invalid credentials");
    }
  };

  // Logout resets the user state
  const handleLogout = () => {
    setUser(null);
  };

  // If not logged in, show login form
  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // Logged in: show dashboard based on role
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${user.role}`} />} />
        <Route
          path="/student"
          element={<StudentDashboard user={user} onLogout={handleLogout} />}
        />
        <Route
          path="/educator"
          element={<EducatorDashboard user={user} onLogout={handleLogout} />}
        />
        <Route
          path="/admin"
          element={<AdminDashboard user={user} onLogout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
}

// Login form component
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