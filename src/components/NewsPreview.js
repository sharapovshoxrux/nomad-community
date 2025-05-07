const dummyNews = [
  {
    title: "Central Asian Job Fair in NYC",
    summary: "Hundreds of job opportunities shared at a local event...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/job-fair-nyc"
  },
  {
    title: "New Mosque Opens in Brooklyn",
    summary: "A new mosque is now serving the Uzbek and Kyrgyz community...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/new-mosque-brooklyn"
  },
  {
    title: "Visa Policy Update for Green Card Holders",
    summary: "Important changes announced for green card applicants...",
    image: "https://via.placeholder.com/300x150",
    link: "/news/visa-policy-update"
  },
];

function NewsPreview() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Latest News</h2>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {dummyNews.map((item) => (
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

export default NewsPreview;
