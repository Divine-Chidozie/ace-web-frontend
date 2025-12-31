import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TOS.jsx";
import Bootcamp from "./pages/Bootcamp.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ContactPage from './pages/ContactPage.jsx';
import Careers from "./pages/Careers.jsx";
import Blog from "./pages/Blog.jsx";
import {default as BlogPost1} from "./pages/blogs/BlogPost";

function App() {
  return (
    <Router className="ace">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        
        <Route path="/blog/5-things-that-help-grow-your-business" element={<BlogPost1 />} />
      </Routes>
    </Router>
  );
}

export default App;
