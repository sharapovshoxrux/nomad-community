import QuickLinks from "../components/QuickLinks";
import NewsPreview from "../components/NewsPreview";


function Home() {
  return (
    <section style={{
      background: "linear-gradient(to bottom, #ffffff, #f0f4ff)",
      padding: "4rem 1rem",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "1rem" }}>
          Find Your Community, Build Your Future
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
          Helping Central Asians adapt and thrive in the U.S.
        </p>
        <input
          type="text"
          placeholder="Search Jobs, mosques, legal help..."
          style={{
            padding: "1rem",
            width: "100%",
            maxWidth: "450px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
          }}
        />
      </div>
    <QuickLinks />
    <NewsPreview />

    </section>
  );
  
}

export default Home;
