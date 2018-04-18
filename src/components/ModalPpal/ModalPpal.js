import React, { Component } from 'react';


class ModalPpal extends Component {
    render() {
        return (
            <div>
                <div className="modal"> 
                    <h1 className="modal__title"> ¿CUAL ES TU META PARA ESTE 2018?</h1>
                    <div className="flex-container container">
                        <input className="modal__goal" placeholder="Escribe tu meta, objetivo o servicio que desees lograr"/>
                    </div>
                    <div className="flex-container container">
                        <button type="button" className="modal__button">QUIERO CONSEGUIR MI META, CAMBIAR MI CUERPO Y TRANSFORMAR MI VIDA</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPpal;