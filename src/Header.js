import { useState } from "react";
import carmen from "./carmen.svg";
import menu from "./menu.png";
import socialLinks from "./social.js";
import sectionLinks from "./links.js";
import "./sass/App.css";

function Header() {
  const [style, setStyle] = useState(false);
  const [submenuItems, setSubmenuItems] = useState([]);

  function moveMenu(e) {
    const value = e.target.textContent;
    sectionLinks.filter((el) => {
      if (el.name === value) setSubmenuItems(el.submenu);
    });
    const tempBtn = e.target.getBoundingClientRect();
    /// Get the wd of the screen
    /// Get the wd of the nav bar submenu
    /// Get the location of mouse
    /// Move navbar depending on wd and mouse position
  }

  return (
    <>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" className="logo" />
        <img
          src={menu}
          alt="menu"
          className="logo toggleBtn"
          onClick={() => setStyle(!style)}
        />
        <nav className="toggleNav">
          {sectionLinks.map((el) => {
            const { id, name } = el;
            return (
              <a
                key={id}
                rel="noopener noreferrer"
                className="links"
                onMouseOver={(e) => moveMenu(e)}
                // Prevent from refresh, comment this when links are set properly
              >
                {name}
              </a>
            );
          })}
        </nav>
        <nav className="socialNav">
          {socialLinks.map((el) => {
            const { id, name, url, img } = el;
            return (
              <a key={id} href={url} target="_blank" rel="noopener noreferrer">
                <img className="social" src={img} alt={name} />
              </a>
            );
          })}
        </nav>
      </header>
      <nav
        className="toggleDown"
        style={{
          display: style ? "block" : "none",
        }}
      >
        {sectionLinks.map((el) => {
          const { id, name, url } = el;
          return (
            <a
              key={id}
              href={url}
              rel="noopener noreferrer"
              className="links links-down"
              onClick={(e) => e.preventDefault()} // Prevent from refresh, comment this when links are set properly
            >
              {name}
            </a>
          );
        })}
      </nav>
      <nav className="submenu" onMouseLeave={() => setSubmenuItems([])}>
        {submenuItems.map((el, index) => (
          <a
            key={index}
            rel="noopener noreferrer"
            className="links"
          >
            {el}
          </a>
        ))}
      </nav>
    </>
  );
}

export default Header;
