import React from "react";
import presentacion from './images/cami.png'


const Home = () => {
        return (
            <div>
                <div className="Kaki">
                    <img src={presentacion} alt="" style={{ width: '100%', paddingBottom: '0px', }} />
                    <div id="texto">
                        <h1 className="titulo"><a href="/acerca">Acerca de mi</a></h1>
                        <br />
                        <br />
                        <h1 className="titulo"><a href="/trabajos">Mis trabajos</a></h1>
                        <br />
                        <br />
                        <h1 className="titulo"><a href="/comisiones">Comisiones</a></h1>
                        <br />
                        <br />
                        <h1 className="titulo"><a href="/contacto">Contacto</a></h1>
                    </div>
                    <div id="imagen">
                        <img src="/images/cami_png.png" alt="" style={{ width: '500px', height: '400px' }} />
                    </div>
                </div>
                <div className="Kakires">
                    <img src="/images/Portfolio Presentation.jpg" alt="" style={{ width: '100%', paddingBottom: '20px' }} />
                    <div id="texto">
                        <h1 className="titulo"><a href="/acerca">Acerca de mi</a></h1>
                    </div>
                    <div id="texto">
                        <h1 className="titulo"><a href="/trabajos">Mis trabajos</a></h1>
                    </div>
                    <div id="texto">
                        <h1 className="titulo"><a href="/comisiones">Comisiones</a></h1>
                    </div>
                    <div id="texto">
                        <h1 className="titulo"><a href="/contacto">Contacto</a></h1>
                    </div>
                    <div id="imagen">
                        <img src="/images/cami_png.png" alt="" style={{ width: '450px' }} />
                    </div>
                </div>
            </div>
        );
    }
;

export default Home;