const posts = [
  {
    title: "How I Found My First Job in NYC as an Immigrant",
    summary: "My journey from arrival to employment in less than 3 months.",
    image: "https://via.placeholder.com/300x150",
    link: "/blog/finding-first-job"
  },
  {
    title: "Understanding Tenant Rights in New York",
    summary: "Tips for renting legally and safely as a new immigrant.",
    image: "https://via.placeholder.com/300x150",
    link: "/blog/tenant-rights-ny"
  },
  {
    title: "3 Halal Restaurants That Feel Like Home",
    summary: "Delicious, affordable, and family-friendly halal spots.",
    image: "https://via.placeholder.com/300x150",
    link: "/blog/halal-eats-nyc"
  }
];

function Blog() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Community Blog</h1>
      <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {posts.map((post) => (
          <div key={post.title} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "1rem", background: "#fff" }}>
            <img src={post.image} alt={post.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "1.2rem", margin: "0.8rem 0" }}>{post.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{post.summary}</p>
            <a href={post.link} style={{ display: "inline-block", marginTop: "0.5rem", color: "#4F8EF7", textDecoration: "none", fontWeight: "bold" }}>
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
