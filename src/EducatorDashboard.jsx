import ChangePasswordForm from "./ChangePasswordForm.jsx"; //AI added this line, along with <ChangePasswordForm user={user} /> in the return statement

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