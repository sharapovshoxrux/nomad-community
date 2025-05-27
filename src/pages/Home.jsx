import QuickLinks from "../components/QuickLinks";
import NewsPreview from "../components/NewsPreview";


function HomePage() {
  return (
    <section style={{textAlign: "center", padding: "4rem 2rem"}}>
      <h1 style={{fontSize: "2.5rem", marginBottom: "1rem"}}>
        Find YOur Community, Build Your Future
      </h1>
      <p style={{fontSize: "1.2rem", color: "#555", marginBottom: "2rem"}}>
        Helping Central Asians adapt and thrive in the U.S.
      </p>
      <input
        type="text"
        placeholder="Search Jobs, mosques, legal help..."
        style={{
          padding: "0,8rem 1rem",
          width: "100%",
          maxWidth: "400px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

    <QuickLinks />
    <NewsPreview />

    </section>
  );
  
}

export default HomePage;
