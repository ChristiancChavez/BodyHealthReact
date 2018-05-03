import React, { Component } from 'react';

class Quotation extends Component {

    constructor(){
        super();
        this.state = {
            programFormOpen: false,
            companyFormOpen: false,
        };
        this.hideShowForm = this.hideShowForm.bind(this);
        this.hideShowCompanyForm = this.hideShowCompanyForm.bind(this);
    }

    hideShowForm(){
        const { programFormOpen } =  this.state;  
        this.setState({
            programFormOpen: !programFormOpen
        })
        document.getElementById("optionMenu").innerHTML = "";
    }

    hideShowCompanyForm(){
        const { companyFormOpen } = this.state;
        this.setState({
            companyFormOpen: !companyFormOpen
        })
        document.getElementById("optionMenu").innerHTML = "";
    }

    render() {
        return (
            <div>
                <div className="quotation">
                    <div>
                        <h1 className="quotation__title">¡Queremos darte los mejores entrenamientos, programas de felicidad, consejos de nutrición, seguimientos y valoraciones pertinentes a tus NECESIDADES!</h1>
                    </div>
                    <div id="optionMenu">
                        <div className="options">
                            <h1 className="options__title">¿Que Servicio deseas obtener con nosotros?</h1>
                            <div className="options__button">
                                <button type="button" onClick={this.hideShowForm} className="options__button options__button--bts" ><a href=""></a>Personalizado</button>
                                <button type="button" onClick={this.hideShowForm} className="options__button options__button--bts" ><a href=""></a>Grupal</button>
                                <button type="button" onClick={this.hideShowForm} className="options__button options__button--bts" ><a href=""></a>Servicios complementarios</button>
                                <button type="button" onClick={this.hideShowCompanyForm} className="options__button options__button--bts" ><a href=""></a>Felicidad para tu empresa</button>
                            </div>
                        </div>
                    </div>

                    {this.state.programFormOpen && <div className="programsForm">
                        <div className="form">
                            <div className="form__column">
                                <input className="form__column__input" type="text" placeholder="NOMBRES" />
                                <input className="form__column__input" type="text" placeholder="BARRIO" />
                                <input className="form__column__input" type ="number" placeholder="CELULAR" />
                                <input className="form__column__input" type="number"  min="1" max="70" placeholder="EDAD" />
                                <input className="form__column__input" type="time" placeholder="HORARIO ENTRENAMIENTO" />
                                <input className="form__column__input" type="text" placeholder="TIPO DE ENTRENAMIENTO" />
                            </div>
                            <div className="form__column">
                                <input className="form__column__input" type="text" placeholder="APELLIDOS" />
                                <input className="form__column__input" type="text" placeholder="DIRECCIÓN" />
                                <input className="form__column__input" type ="email" placeholder="CORREO" />
                                <input className="form__column__input" type="text" placeholder="GÉNERO" />
                                <input className="form__column__input" type="date" placeholder="DIAS DE ENTRENAMIENTO" />
                                <input className="form__column__input" type="text" placeholder="SERVICIO ADICIONAL" />
                            </div>
                        </div>
                        <div className="form__column">
                            <input className="form__column__input form__column__input--big" type="text" placeholder="DETALLES O ACLARACIONES SOBRE EL " />
                        </div>
                        <div className="button">
                            <button className="button__submit" type="submit">QUIERO CAMBIAR MI VIDA Y TRANSFORMAR MI CUERPO</button>
                        </div>
                    </div>}

                    {this.state.companyFormOpen && <div className="companyForm">
                        <div className="form">
                            <div className="form__column">
                                <input className="form__column__input" type="text" placeholder="EMPRESA" />
                                <input className="form__column__input" type="text" placeholder="BARRIO" />
                                <input className="form__column__input" type="text" placeholder="ENCARGADO" />
                                <input className="form__column__input" type="number" placeholder="TELEFONO" />
                                <input className="form__column__input" type="number" placeholder="CANTIDAD DE PERSONAS" />
                                <input className="form__column__input" type="number" placeholder="PRESUPUESTO" />
                            </div>
                            <div className="form__column">
                                <input className="form__column__input" type="text" placeholder="ÁREA O DEPARTAMENTO" />
                                <input className="form__column__input" type="text" placeholder="DIRECCIÓN" />
                                <input className="form__column__input" type ="email" placeholder="CORREO" />
                                <input className="form__column__input" type="number" placeholder="CELULAR" />
                                <input className="form__column__input" type="text" placeholder="INTENSIDAD HORARIA SEMANAL" />
                                <input className="form__column__input" type="time" placeholder="HORARIO  A DESAROLLAR PROGRAMA" />
                            </div>
                        </div>
                        <div className="form__column">
                            <input className="form__column__input form__column__input--big" type="text" placeholder="DETALLES O ACLARACIONES SOBRE EL PROGRAMA" />
                        </div>
                        <div className="button">
                            <button className="button__submit" type="submit">QUIERO MEJORAR EL BIENESTAR Y LA FELICIDAD DE MI TALENTO HUMANO</button>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export  default Quotation;