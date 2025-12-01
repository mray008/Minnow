import ChangePasswordForm from "./ChangePasswordForm.jsx"; //AI added this line, along with <ChangePasswordForm user={user} /> in the return statement

//took some code from navbar.css and changed it up a bit to implement it here

export default function StudentDashboard({ user, onLogout }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 160px)", // adjust for header/footer height
        padding: "150px 40px 40px 40px", // pushes content down from top
        boxSizing: "border-box",
      }}
    >
      <h1>Student Dashboard</h1>
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
