import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "0.8rem", background: "#4F8EF7", color: "#fff", border: "none", borderRadius: "8px" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
