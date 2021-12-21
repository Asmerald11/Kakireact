import React from "react";
import insta from './images/instagram.png';
import tweet from './images/twitter.png';
import deviant from './images/devianart.png';
import tiktok from './images/tiktok.png';

const Registro = () => {
        return (
            <div>
                <div className="reg-form">
                    <h1>Registrarse</h1>
                    <form action="/auth/registro" method="POST">
                        <input type="text" name="username" placeholder="Usuario" required />
                        <input type="password" name="password" placeholder="Contraseña" required />
                        <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" required />
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="submit" placeholder="Registrarse" />
                        <a href="/contacto">
                            <h6>Volver</h6>
                        </a>
                    </form>
                </div>
                <div className="contactos">
                    <div className="izq">
                        <img src={insta} alt="" />
                        <a href="https://www.instagram.com/kakidraws_/" target="_blank" rel="noopener noreferrer"><span>Instagram</span></a>
                    </div>
                    <div className="der">
                        <img src={tweet} alt="" />
                        <a href="https://twitter.com/kakidraws_" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a>
                    </div>
                    <div className="izq">
                        <img src={deviant}alt="" />
                        <a href="https://www.deviantart.com/kakidraws" target="_blank" rel="noopener noreferrer"><span>Deviantart</span></a>
                    </div>
                    <div className="der">
                        <img src={tiktok} alt="" />
                        <a href="https://www.tiktok.com/@kakidraws_?lang=es" target="_blank" rel="noopener noreferrer"><span>TikTok</span></a>
                    </div>
                </div>
            </div>
        );
    };

export default Registro