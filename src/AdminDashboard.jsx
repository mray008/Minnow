export default function AdminDashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}