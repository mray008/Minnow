export default function EducatorDashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Educator Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}