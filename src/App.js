import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mosques from "./pages/Mosques";
import Legal from "./pages/Legal";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mosques" element={<Mosques />} />
          <Route path="legal" element={<Legal />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; // ✅ make sure this line is included
