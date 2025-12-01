import React from "react";
import { useNavigate } from "react-router-dom";
import { redirectToLoginForGame } from "./Login.jsx";
import {Link} from "react-router-dom";

// Game navigation and login redirect handling implemented with assistance from ChatGPT

// Footer and layout adjustments for Games page guided by ChatGPT

export default function Games({ user }) {
  const navigate = useNavigate();

  const handleGameClick = (gamePath) => {
      navigate(gamePath);

  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 200px)", // adjust to leave space for header/footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",       // vertically center the content
        alignItems: "center",           // horizontally center the content
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h2>Games</h2>
      <p>Click a game to start playing!</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
            <button
        onClick={() => handleGameClick("/matching-game")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#3B2F2F",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Matching Game
      </button>
               <button
        onClick={() => handleGameClick("/BingoGame")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#3B2F2F",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Bingo Game
      </button>
       
      </div>
    </div>
  );
}