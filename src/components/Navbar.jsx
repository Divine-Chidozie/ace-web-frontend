import { useCallback, useEffect, useRef, useState } from "react";
import ".././App.jsx";
import { Link } from "react-router-dom";

/**
 * Custom hook to change Navbar opacity when scrolling happens.
 *
 * @param {React.RefObject<null} headerNavbarRef reference to the header element with class nav_bar
 * @param {boolean} isAlwaysOpaque when false, header changes background after scrolling and when true,
 *  header always has a background
 */
function useNavbarOpacity(headerNavbarRef, isAlwaysOpaque = false) {
  const handleScroll = useCallback(() => {
    if (isAlwaysOpaque) return;
    if (window.scrollY > 150) {
      headerNavbarRef.current.classList.add("opaque-mode");
    } else {
      headerNavbarRef.current.classList.remove("opaque-mode");
    }
  }, [headerNavbarRef, isAlwaysOpaque]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
}

const Navbar = ({ isAlwaysOpaque = false, style }) => {
  let [menuOpen, setMenuOpen] = useState(false);
  const headerNavbarRef = useRef(null);
  useNavbarOpacity(headerNavbarRef, isAlwaysOpaque);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container">
        <header
          ref={headerNavbarRef}
          style={style}
          className={isAlwaysOpaque ? "opaque-mode nav_bar" : "nav_bar fade-up"}
        >
          <Link to="/">
            <img
              className="nav_bar_logo"
              src="/assets/svg/ace-logo.svg"
              alt="Ace Digital Logo"
            />
          </Link>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
          </div>

          <nav className={`nav_links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </nav>

          <a className="start-btn" href="/contact-us">
            Get In Touch
          </a>
        </header>
      </div>
    </>
  );
};

export default Navbar;
