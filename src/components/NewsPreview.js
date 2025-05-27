const dummyNews = [
  {
    title: "Job Fair in Brooklyn for Immigrants",
    summary: "Hundreds of opportunities shared at a Central Asian-focused event.",
    image: "https://via.placeholder.com/300x160",
    link: "/news/job-fair"
  },
  {
    title: "New Mosque Opens in Queens",
    summary: "The community celebrates the opening of a new prayer space.",
    image: "https://via.placeholder.com/300x160",
    link: "/news/new-mosque"
  },
  {
    title: "Free Legal Clinic This Weekend",
    summary: "Volunteers offer help with immigration paperwork and legal advice.",
    image: "https://via.placeholder.com/300x160",
    link: "/news/legal-clinic"
  },
];

function NewsPreview() {
  return (
    <section style={{ padding: "3rem 1rem", backgroundColor: "#f7f9fc" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Latest News</h2>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", maxWidth: "1000px", margin: "0 auto" }}>
        {dummyNews.map((item) => (
          <div key={item.title} style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
            overflow: "hidden",
            transition: "transform 0.2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>{item.summary}</p>
              <a href={item.link} style={{ color: "#4F8EF7", fontWeight: "bold", display: "inline-block", marginTop: "0.5rem" }}>
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsPreview;
