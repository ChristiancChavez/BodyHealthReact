import React, { Component } from 'react';

class Cortesy extends Component {
    render() {
        return (
            <div>
                <div className="cortesy">
                    <div>
                        <h1 className="cortesy__title">¡Estas a unos pasos de cambiar tu VIDA con nuestra GUÍA PROFESIONAL!</h1>
                    </div>
                    <div className="form">
                        <div className="form__column">
                            <input className="form__column__input" type="text" placeholder="NOMBRES" />
                            <input className="form__column__input" type="text" placeholder="BARRIO" />
                            <input className="form__column__input" type ="number" placeholder="CELULAR" />
                            <input className="form__column__input" type="number"  min="1" max="70" placeholder="EDAD" />
                            <input className="form__column__input" type="text" placeholder="SERVICIO DESEADO" />
                            <input className="form__column__input" type="date" placeholder="DIA DE LA CORTESIA" />
                        </div>
                        <div className="form__column">
                            <input className="form__column__input" type="text" placeholder="APELLIDOS" />
                            <input className="form__column__input" type="text" placeholder="DIRECCIÓN" />
                            <input className="form__column__input" type ="email" placeholder="CORREO" />
                            <input className="form__column__input" type="text" placeholder="GÉNERO" />
                            <input className="form__column__input" type="time" placeholder="HORARIO CORTESIA" />
                            <input className="form__column__input" type="text" placeholder="LUGAR PARA LA CORTESIA" />
                        </div>
                    </div>
                    <div className="form__column">
                        <input className="form__column__input form__column__input--big" type="text" placeholder="ANTECEDENTES DE ENFERMEDAD O INCAPACIDAD" />
                        <input className="form__column__input form__column__input--big" type="text" placeholder="OBJETIVO A LARGO PLAZO CON LOS ENTRENAMIENTOS" />
                    </div>
                    <div className="button">
                        <button className="button__submit" type="submit">QUIERO CAMBIAR MI VIDA Y TRANSFORMAR MI CUERPO</button>
                    </div>
                </div>
            </div>
        );
    }
}

export  default Cortesy;