const articles = [
  {
    title: "Green Card Policy Updates in 2025",
    summary: "U.S. immigration adjusts timelines and requirements for Central Asian applicants...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/green-card-update"
  },
  {
    title: "Uzbek Cultural Festival This Weekend in Queens",
    summary: "A colorful celebration of Uzbek food, dance, and music arrives this Sunday...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/uzbek-festival-nyc"
  },
  {
    title: "Free Legal Aid Center Opens for Immigrants",
    summary: "Immigrants in Brooklyn now have access to free immigration legal advice...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/legal-aid-2025"
  },
  {
    title: "Kyrgyz Job Board Expands to New Jersey",
    summary: "Job seekers from Central Asia can now access listings from local employers...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/kyrgyz-jobs"
  }
];

function News() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>All News</h1>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {articles.map((item) => (
          <div key={item.title} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "1rem", background: "#fff" }}>
            <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "1.2rem", margin: "0.8rem 0" }}>{item.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{item.summary}</p>
            <a href={item.link} style={{ display: "inline-block", marginTop: "0.5rem", color: "#4F8EF7", textDecoration: "none", fontWeight: "bold" }}>
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
