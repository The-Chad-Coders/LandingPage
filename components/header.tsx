/** @jsx jsx */
import { useEffect, useState } from 'react';
import { Container, jsx } from 'theme-ui';

const Header = () => {
    const sections = [
        { nombre: 'Home', link: 'home' },
        { nombre: 'Nosotros', link: 'aboutUs' },
        { nombre: 'Trabajos', link: 'projects' },
        { nombre: 'Clientes', link: 'clients' },
        { nombre: 'Contacto', link: 'contact' }
    ];
    const [selectedSection, setSelectedSection] = useState(0);

    useEffect(() => {
        const active = document.querySelector('.navbar.active');
        const el = document.querySelector(
            `.navbar-item[key='${sections[selectedSection]}']`
        );
        if (active !== el) {
            active.classList.remove('active');
            el.classList.add('active');
        }
    }, [selectedSection]);

    return (
        <Container
            sx={{
                gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr'],
                gridTemplateRows: ['1fr', '1fr', '0.15fr 1fr']
            }}
            className="header grid-container"
        >
            <a
                className="logoAndText"
                sx={{
                    textAlign: ['center', 'center', 'left'],
                    margin: ['50px 15px', '50px 15px', '50px'],
                    gridRow: ['2/3 !important', '2/3 !important', 'unset']
                }}
            >
                <img
                    sx={{
                        maxWidth: ['100%', '100%', '90%'],
                        margin: ['0 0 15px 0', '0 0 15px 0', '0 50px']
                    }}
                    src="/img/logo.png"
                    alt="logo"
                />
                <div className="header-text">
                    <h2
                        sx={{
                            maxWidth: ['100%', '100%', '80%'],
                            margin: '25px 0 0 0'
                        }}
                    >
                        The Chad Coders
                    </h2>
                    <p
                        sx={{
                            maxWidth: ['100%', '100%', '80%'],
                            margin: '25px 0 0 0'
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem hic molestiae harum enim nesciunt beatae, maiores
                        voluptates aspernatur dignissimos delectus. Quibusdam
                        dolore sed alias dolores expedita aut minima praesentium
                        debitis!
                    </p>
                    <button type="button" className="btn primary flat">
                        Sobre Nosotros
                    </button>
                    <button type="button" className="btn primary">
                        Contactanos
                    </button>
                </div>
            </a>
            <ul
                sx={{
                    margin: ['20px 0 0 0', '20px 0 0 0', '40px 0 0 0'],
                    gridColumn: ['1', '1', 'auto'],
                    gridRow: ['1', '1', 'auto'],
                    gridArea: ['unset', 'unset', 'navbar']
                }}
                className="navbar"
            >
                {sections.map((section, index) => (
                    <li
                        key={index}
                        className={
                            selectedSection === index
                                ? 'navbar-item active'
                                : 'navbar-item'
                        }
                    >
                        <a
                            onClick={() => setSelectedSection(index)}
                            href={`#${section.link}`}
                        >
                            {section.nombre}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="bgHeader"></div>
        </Container>
    );
};

export default Header;
