import React from "react";
import './App.css'
import cuadros1 from './images/cuadros1.jpg';
import cuadros2 from './images/cuadros2.jpg';
import comision7 from './images/comision7.png';
import fanarts2 from './images/fanarts2.jpg';
import comision4 from './images/comision4.jpg';



const Comisiones = () => {
    return (
        <div className="comms">
            <div className="card" style={{ width: '20%', marginBottom: '15px' }}>
                <img src={cuadros1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Comision de cuadro acrilico</h5>
                    <p className="card-text">Tipo: pintura sobre bastidor
                        Tecnica: Acrilico
                        Precio y tamaño variarian
                        Precio base $2500</p>
                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" className="btn btn-primary" rel="noreferrer">MD Instagram</a>
                </div>
            </div>
            <div className="card" style={{ width: '20%', marginBottom: '15px' }}>
                <img src={cuadros2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Comision de cuadro oleo</h5>
                    <p className="card-text">Tipo: pintura sobre bastidor
                        Tecnica: Oleo
                        Precio y tamaño variarian
                        Precio base $2500</p>
                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" className="btn btn-primary" rel="noreferrer">MD Instagram</a>
                </div>
            </div>
            <div className="card" style={{ width: '20%', marginBottom: '15px' }}>
                <img src={comision7} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Iconos/dibujos simples/sketchs</h5>
                    <p className="card-text">Precio y tamaño variarian.
                        Precio base $650</p>
                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" className="btn btn-primary" rel="noreferrer">MD Instagram</a>
                </div>
            </div>
            <div className="card" style={{ width: '20%', marginBottom: '15px' }}>
                <img src={fanarts2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Fanarts</h5>
                    <p className="card-text">Precio y tamaño variarian.
                        Precio base $1500</p>
                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" className="btn btn-primary" rel="noreferrer">MD Instagram</a>
                </div>
            </div>
            <div className="card" style={{ width: '20%', marginBottom: '15px' }}>
                <img src={comision4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Mascotas</h5>
                    <p className="card-text">Precio y tamaño variarian.
                        Precio base $2000</p>
                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" className="btn btn-primary" rel="noreferrer">MD Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Comisiones;