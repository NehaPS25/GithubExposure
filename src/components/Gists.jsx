import "../CSS/Gists.css"

export default function Gists({ gists }) {
  return (
    <div>
      <h3>Gists</h3>
      {gists.map((g) => (
        <div key={g.id} style={{ marginBottom: 10 }}>
          <a href={g.html_url} target="_blank">{g.description || "No Description"}</a>
        </div>
      ))}
    </div>
  );
}
