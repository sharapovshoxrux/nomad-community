import { Link } from "react-router-dom";

const links = [
  { title: "Jobs", emoji: "🛠", path: "/jobs" },
  { title: "Mosques", emoji: "🕌", path: "/mosques" },
  { title: "Legal Help", emoji: "⚖️", path: "/legal" },
  { title: "News", emoji: "📰", path: "/news" },
];

function QuickLinks() {
  return (
    <section style={{ padding: "3rem 1rem" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Explore Quick Links</h2>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", maxWidth: "900px", margin: "0 auto" }}>
        {links.map((link) => (
          <Link
            key={link.title}
            to={link.path}
            style={{
              textDecoration: "none",
              padding: "2rem 1rem",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
              textAlign: "center",
              color: "#333",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ fontSize: "2.2rem" }}>{link.emoji}</div>
            <h3 style={{ marginTop: "0.8rem", fontSize: "1.1rem" }}>{link.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;
