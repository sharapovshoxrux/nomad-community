function Footer() {
  return (
    <footer style={{
      backgroundColor: "#f3f3f3",
      padding: "2rem 1rem",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "#666",
      marginTop: "4rem"
    }}>
      <p>© {new Date().getFullYear()} no-mad.us — Built for Central Asian immigrants in the U.S.</p>
    </footer>
  );
}

export default Footer;
