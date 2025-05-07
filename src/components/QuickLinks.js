import { Link } from "react-router-dom";

const links = [
  { title: "Jobs", emoji: "🛠", path: "/jobs" },
  { title: "Mosques", emoji: "🕌", path: "/mosques" },
  { title: "Legal Help", emoji: "⚖️", path: "/legal" },
  { title: "News", emoji: "📰", path: "/news" },
];

function QuickLinks() {
  return (
    <section style={{ padding: "2rem", display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
      {links.map((link) => (
        <Link
          key={link.title}
          to={link.path}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "12px",
            textDecoration: "none",
            color: "#333",
            background: "#f9f9f9"
          }}
        >
          <div style={{ fontSize: "2rem" }}>{link.emoji}</div>
          <span style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{link.title}</span>
        </Link>
      ))}
    </section>
  );
}

export default QuickLinks;
