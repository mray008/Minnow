import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aquariumBg from './assets/Background.jpeg';
import Footer from "./Footer.jsx";
import './Register.css';
import { isValidPassword, displayPasswordRequirements, validatePassword, passwordMatch } from "./PassChange.jsx";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = "https://minnow.onrender.com";

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const validationError = validatePassword(password, confirmPassword);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Submit registration
    try {
      const res = await fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        const err = await res.json();
        setError(err.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setError("Unable to connect to server.");
    }
  };

  return (
    <div
      className="register-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "400px 20px 40px 20px",
        boxSizing: "border-box",
        backgroundImage: `url(${aquariumBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="register-form"
        style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <h2>Create Account</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        
        <div className="password-requirements">
            {displayPasswordRequirements()}
        </div>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        
        <button
          type="submit"
          style={{
            padding: "12px",
            fontSize: "1.1rem",
            backgroundColor: "#3B2F2F",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>

      <button
        type="button"
        className="back-to-login"
        onClick={() => navigate("/login")}
      >
        Back to Login
      </button>

      {/* Footer below */}
      <div style={{ marginTop: "100px", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}

//This file was added by AI, then edited.