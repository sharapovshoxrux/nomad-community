function About() {
  return (
    <section style={{ padding: "3rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About No-Mad</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        No-Mad is a community platform created to help immigrants from Central Asia adapt to life in the United States —
        starting with New York.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1rem" }}>
        Whether you’ve just arrived or you’ve been here for years, No-Mad helps you find jobs, discover nearby mosques,
        get legal guidance, connect with your cultural community, and read essential news in your language.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        Our mission is to create a trusted space where Central Asian immigrants can feel supported, informed, and empowered.
      </p>

      <ul style={{ marginTop: "2rem", fontSize: "1rem", paddingLeft: "1.2rem" }}>
        <li>✔️ Immigrants from Uzbekistan, Kyrgyzstan, Kazakhstan, Tajikistan, Turkmenistan</li>
        <li>✔️ People looking for halal food, jobs, mosques, and help with immigration</li>
        <li>✔️ Families trying to stay connected to their culture while building a life in the U.S.</li>
      </ul>
    </section>
  );
}

export default About;
