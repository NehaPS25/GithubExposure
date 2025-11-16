import { useState } from "react";
import "../CSS/SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "12px 18px",
          width: "65%",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          transition: "0.3s",
          boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #007bff")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />

      <button
        type="submit"
        style={{
          padding: "12px 18px",
          background: "#000",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "0.3s",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        }}
        onMouseOver={(e) => (e.target.style.background = "#333")}
        onMouseOut={(e) => (e.target.style.background = "#000")}
      >
        Search
      </button>
    </form>
  );
}
