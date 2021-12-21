import React from 'react'


const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left">
                    <img src="/images/Kakilogo.png" alt="" className="coki" />
                    <p>Bienvenidos a mi pagina, aca van a poder conocer un poco mas de mi, ver mis trabajos y hasta pueden ponerse en contacto conmigo. Todo el arte de esta pagina esta hecho por mi. Sin nada mas que agregar disfruten su paso por mi pagina y ante cualquier duda contactenme.</p>
                    <div className="socials">
                        <a href="https://www.deviantart.com/kakidraws" target="_blank" rel="noreferrer noopener"><i className="bi-brush" /></a>
                        <a href="https://twitter.com/kakidraws_" target="_blank" rel="noreferrer noopener"><i className="bi-twitter" /></a>
                        <a href="https://www.instagram.com/kakidraws_/" target="_blank" rel="noreferrer noopener"><i className="bi-instagram" /></a>
                        <a href="https://www.tiktok.com/@kakidraws_?lang=es" target="_blank" rel="noreferrer noopener"><i className="bi-music-note" /></a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <h2>Links utiles</h2>
                        <ul className="box">
                            <li><a href="/acerca">Acerca de mi</a></li>
                            <li><a href="/trabajos">Mis trabajos</a></li>
                            <li><a href="/comisiones">Comisiones</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Diseñador web</h2>
                        <ul className="box">
                            <li><a href="https://www.facebook.com/santiago.morelli.3" target="_blank" rel="noreferrer noopener">Facebook</a></li>
                            <li><a href="https://twitter.com/SantiMorelli21" target="_blank" rel="noreferrer noopener">Twitter</a></li>
                            <li><a href="https://www.instagram.com/santinmorelli/" target="_blank" rel="noreferrer noopener">Instagram</a></li>
                            <li><a href="https://github.com/Asmerald11" target="_blank" rel="noreferrer noopener">GitHub</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-bottom">
                    <p>All Rights reserved by ©Kakidraws 2021</p>
                </div>
            </footer>
        </div>
    );
}
    ;

export default Footer