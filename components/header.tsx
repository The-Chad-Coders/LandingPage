import { useState, useEffect } from "react";

const Header = () => {
  const sections = [
    { nombre: "Home", link: "home" },
    { nombre: "Nosotros", link: "aboutUs" },
    { nombre: "Trabajos", link: "projects" },
    { nombre: "Clientes", link: "clients" },
    { nombre: "Contacto", link: "contact" },
  ];
  const [selectedSection, setSelectedSection] = useState(0);

  useEffect(() => {
    const active = document.querySelector(".navbar.active");
    const el = document.querySelector(`.navbar-item[key='${sections[selectedSection]}']`);
    if (active !== el) {
      active.classList.remove("active");
      el.classList.add("active");
    }
  }, [selectedSection]);

  return (
    <div className="header">
      <a className="logo">
        <img src="/img/logo.png" alt="logo" />
      </a>
      <ul className="navbar">
        {sections.map((section, index) => (
          <li
            key={index}
            className={selectedSection === index ? "navbar-item active" : "navbar-item"}
          >
            <a onClick={() => setSelectedSection(index)} href={`#${section.link}`}>
              {section.nombre}
            </a>
          </li>
        ))}
      </ul>
      <div className="header-text">
        <h2>The Chad Coders</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic molestiae harum
          enim nesciunt beatae, maiores voluptates aspernatur dignissimos delectus. Quibusdam
          dolore sed alias dolores expedita aut minima praesentium debitis!
        </p>
        <button type="button" className="btn primary flat">
          Sobre Nosotros
        </button>
        <button type="button" className="btn primary">
          Contactanos
        </button>
      </div>
      <div className="header-image">
        <img src="/img/fondoheader.png" alt="brand image" />
      </div>
    </div>
  );
};

export default Header;
