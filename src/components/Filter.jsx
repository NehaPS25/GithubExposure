export default function Filters({ setFilter }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="stars">Sort by stars</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="react">React</option>
      </select>
    </div>
  );
}
