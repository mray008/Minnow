export default function StudentDashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}