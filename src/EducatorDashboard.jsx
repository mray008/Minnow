import ChangePasswordForm from "./ChangePasswordForm.jsx";

export default function EducatorDashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Educator Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <ChangePasswordForm user={user} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}