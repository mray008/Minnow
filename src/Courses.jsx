import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses({ user }) {
  const navigate = useNavigate();

  const handleGameClick = (gamePath) => {
    navigate(gamePath);
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",  
        padding: "40px 80px",  
        marginTop: "120px"     
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Your Courses</h2>

     
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
          Science
        </p>
        <p style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px", color: "grey"}}>
           <em>Assignments:</em>
        </p>

        <button onClick={() => handleGameClick("/matching-game")}>
          Matching Game
        </button>
      </div>

      
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
          Math
        </p>
          <p style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px", color: "grey"}}>
          <em>Assignments:</em>
        </p>

        <button onClick={() => handleGameClick("/BingoGame")}>
          Bingo
        </button>
      </div>
    </div>
  );
}
