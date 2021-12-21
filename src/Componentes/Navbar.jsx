import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className="header">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="botoncheck">
                    <i className="fas fa-bars" />
                </label>
                <label className="Logo">
                    <a href="/" style={{ textDecoration: 'none' }}>
                        Kakidraws
                    </a>
                </label>
                <ul className="cabecera">
                    <li><a href="/acerca">Acerca de mi</a></li>
                    <li><a href="/trabajos">Mis trabajos</a></li>
                    <li><a href="/comisiones">Comisiones</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
            </div>
        );
    }
;

export default Nav