import { useState } from "react";
import Login from "./Login.jsx"; 

export default function MainRouter() {
  const [showLogin, setShowLogin] = useState(false);

  if (!showLogin) {
    return (
      <div className="landing">
        <h1>Welcome to Minnow!</h1>
        <button onClick={() => setShowLogin(true)}>Go to Login</button>
      </div>
    );
  }

 
  return <Login/>;
}