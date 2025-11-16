import "../CSS/Followers.css"
export default function Followers({ followers }) {
  return (
    <div>
      <h3>Followers</h3>
      {followers.map((f) => (
        <div key={f.id} style={{ display: "flex", marginBottom: 10 }}>
          <img src={f.avatar_url} width={40} style={{ borderRadius: "50%" }} />
          <p style={{ marginLeft: 10 }}>{f.login}</p>
        </div>
      ))}
    </div>
  );
}
