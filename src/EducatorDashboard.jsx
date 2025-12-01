import ChangePasswordForm from "./ChangePasswordForm.jsx";

//Pulled from studentdashboard.jsx

export default function EducatorDashboard({ user, onLogout }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 160px)", // adjust for header/footer height
        padding: "150px 40px 40px 40px", // pushes content down from top
        boxSizing: "border-box",
      }}
    >
      <h1>Educator Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <ChangePasswordForm user={user} />
      <button
        onClick={onLogout}
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
        Logout
      </button>
    </div>
  );
}