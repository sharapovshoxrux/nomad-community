import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header style={{ background: "#f9f9f9", borderBottom: "1px solid #ddd" }}>
      <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#4F8EF7" }}>
          no-mad.us
        </div>
        <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem", margin: 0, padding: 0 }}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/news" style={linkStyle}>News</Link></li>
          <li><Link to="/blog" style={linkStyle}>Blog</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  padding: "0.25rem 0.5rem",
  borderRadius: "6px"
};

<li>
  <Link
    to="/"
    style={{
      ...linkStyle,
      transition: "all 0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "#4F8EF7")}
    onMouseLeave={(e) => (e.target.style.color = "#333")}
  >
    Home
  </Link>
</li>


export default NavBar;
