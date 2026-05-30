export default function Dashboard() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <p>Dashboard</p>
      <i>This should be a protected page.</i>
      <p>Your token is : {token}</p>
    </div>
  );
}
