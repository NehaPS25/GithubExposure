import "../CSS/RepoList.css"
export default function RepoList({ repos, filter }) {
  let filtered = repos;

  if (filter === "stars") {
    filtered = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  if (filter !== "all" && filter !== "stars") {
    filtered = repos.filter((repo) =>
      repo.language?.toLowerCase() === filter.toLowerCase()
    );
  }

  return (
    <div>
      <h3>Repositories</h3>
      {filtered.map((repo) => (
        <div
          key={repo.id}
          style={{
            padding: 10,
            marginBottom: 10,
            border: "1px solid gray",
          }}
        >
          <h4>{repo.name}</h4>
          <p>{repo.description}</p>
          <p>⭐ {repo.stargazers_count} | Language: {repo.language}</p>
        </div>
      ))}
    </div>
  );
}
