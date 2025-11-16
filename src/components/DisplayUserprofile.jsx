export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <img
        src={user.avatar_url}
        alt="avatar"
        width={120}
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}
