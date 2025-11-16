import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import RepoList from "../components/RepoList";
import Filters from "../components/Filter";
import Followers from "../components/Followers";
import Gists from "../components/Gists";
import { getUser, getRepos, getFollowers, getGists } from "../services/Api";

export default function Home() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [gists, setGists] = useState([]);
  const [filter, setFilter] = useState("all");

  async function search(username) {
    const userData = await getUser(username);
    setUser(userData);

    setRepos(await getRepos(username));
    setFollowers(await getFollowers(username));
    setGists(await getGists(username));
  }

  return (
    <div
      style={{
        color:"Black",
        padding: "30px",
        width:"100vw",
        maxWidth: "950px",
        margin: "0 auto",
        marginLeft:"15%",
        marginTop:"10%",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
      }}
    >
      {/* Search Section */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "30px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          GitHub User Explorer
        </h2>

        <SearchBar onSearch={search} />
      </div>

      {/* User Details */}
      {user && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            marginBottom: "25px",
          }}
        >
          <UserCard user={user} />
        </div>
      )}

      {/* Filters */}
      {repos.length > 0 && (
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Filters setFilter={setFilter} />
        </div>
      )}

      {/* Repositories */}
      {repos.length > 0 && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#222" }}>📁 Repositories</h3>
          <RepoList repos={repos} filter={filter} />
        </div>
      )}

      {/* Followers */}
      {followers.length > 0 && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#222" }}>👥 Followers</h3>
          <Followers followers={followers} />
        </div>
      )}

      {/* Gists */}
      {gists.length > 0 && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#222" }}>📝 Gists</h3>
          <Gists gists={gists} />
        </div>
      )}
    </div>
  );
}
