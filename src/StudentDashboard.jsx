import ChangePasswordForm from "./ChangePasswordForm.jsx";

export default function StudentDashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <ChangePasswordForm user={user} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}