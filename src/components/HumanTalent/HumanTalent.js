import React, { Component } from 'react';
import TrainerPhoto from '../../Assets/images/personalTrainerPhoto.png';
import TrainerPhoto2 from '../../Assets/images/personalTrainerPhoto2.png';
import IconQualification from '../../Assets/images/star.png';
import IconCertification from '../../Assets/images/icon-certification.png';
import IconCortesy from '../../Assets/images/icon-cortesy.png';
import IconTrainer from '../../Assets/images/logoIcon.png';
import Stars from '../../Assets/images/stars.jpg';
import Valid from '../../Assets/images/valid.png';
import Invalid from '../../Assets/images/invalid.png';
import Iframe from 'react-iframe';


class HumanTalent extends Component {

    constructor(){
        super();
        this.state = {
            certificationForm: false,
            infoTrainerForm: false,
            qualificationForm: false,
            certificationForm2: false,
            infoTrainerForm2: false,
            qualificationForm2: false,
        };
        this.hideShowCertificaction = this.hideShowCertificaction.bind(this);
        this.hideShowInfoTrainer = this.hideShowInfoTrainer.bind(this);
        this.hideShowQualification = this.hideShowQualification.bind(this);
        this.hideShowCertificaction2 = this.hideShowCertificaction2.bind(this);
        this.hideShowInfoTrainer2 = this.hideShowInfoTrainer2.bind(this);
        this.hideShowQualification2 = this.hideShowQualification2.bind(this);
    }

    hideShowCertificaction(){
        const { certificationForm } =  this.state;  
        this.setState({
            certificationForm: !certificationForm
        })
        document.getElementById("iframe").innerHTML = "";
    }

    hideShowInfoTrainer(){
        const { infoTrainerForm } = this.state;
        this.setState({
            infoTrainerForm: !infoTrainerForm
        })
        document.getElementById("iframe").innerHTML = "";
    }

    hideShowQualification(){
        const { qualificationForm } = this.state;
        this.setState({
            qualificationForm: !qualificationForm
        })
        document.getElementById("iframe").innerHTML = "";
    }
    hideShowCertificaction2(){
        const { certificationForm2 } =  this.state;  
        this.setState({
            certificationForm2: !certificationForm2
        })
        document.getElementById("iframe2").innerHTML = "";
    }

    hideShowInfoTrainer2(){
        const { infoTrainerForm2 } = this.state;
        this.setState({
            infoTrainerForm2: !infoTrainerForm2
        })
        document.getElementById("iframe2").innerHTML = "";
    }

    hideShowQualification2(){
        const { qualificationForm2 } = this.state;
        this.setState({
            qualificationForm2: !qualificationForm2
        })
        document.getElementById("iframe2").innerHTML = "";
    }


    render() {
        return(
            <div>
                <div className="humanTalent">
                    <h1 className="humanTalent__title"> Estos son nuestros entrenadores que pondrán a tu servivio su profesionalismo y 
                        mejor acompañamiento,  los cuales estarán siempre disponibles guiandote para mejorar tu cuerpo, 
                        transformar tu vida y conseguir tus metas </h1>
                    <div className="profile">
                        <div className="iframe" id="iframe">
                                <iframe className="iframe__video" src="https://www.youtube.com/embed/watch?v=O1zfHx_ozFI"></iframe>
                        </div>
                        <div className="ppalInfo">
                            <span className="ppalInfo__name"> Christian Camilo Chávez Herrera</span>
                            <img className="ppalInfo__photo" src={TrainerPhoto} />
                            <div className="icons">
                            <img className="icons__icon" onClick={this.hideShowCertificaction} src={IconCertification} />
                            <img className="icons__icon" onClick={this.hideShowInfoTrainer}src={IconTrainer} />
                            <img className="icons__icon" onClick={this.hideShowQualification} src={IconQualification} />
                            <img className="icons__icon" src={IconCortesy} />
                            </div>
                        </div>
                        <div className="personalInfo">
                            {this.state.certificationForm && <div className="category">
                                <span className="category__info">Licenciado  en Educación Física de la Universidad de Antioquia</span>
                            </div>}
                            {this.state.certificationForm && <div className="category">
                                <span className="category__info">Coach en Fitness Personal -- </span>
                                <span className="category__info"> Coach en Rumba Fitness -- </span>
                                <span className="category__info"> Coach Entrenamiento Funcional</span>
                            </div>}
                            {this.state.infoTrainerForm && <div className="category">
                                <span className="category__info">Apasionado por la nutrición saludable, la naturaleza,  el baile urbano y  el fútbol.
                                    Respetuoso por la dedicación, admirador de la prosperidad en la vida por medio de una 
                                    mentalidad positiva y creyente  ferviente que la actitud lo es todo.
                                </span>
                            </div>}    
                            {this.state.qualificationForm && <div className="category">
                                <div className="subcategory"> 
                                    <span className="subcategory__info"> Calidad de Entrenamientos </span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <span className="subcategory__info">Servicio (Música, Implementación, Seguimiento y Valoraciones)</span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <span className="subcategory__info">Atención a Sugerencias y mejoras</span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <span className="subcategory__info">Capacidad de Motivación, Mejora en procesos personales </span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <img className="submit" src={Valid} />
                                <img className="submit submit--invalid" src={Invalid} />
                            </div>}
                            <div className="category">
                                <span className="category__phrase">“Lo que piensas habitualmente determina en gran medida en lo que te convertirás”   Bruce Lee</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="iframe" id="iframe2">
                                <iframe className="iframe__video" src="https://www.youtube.com/embed/watch?v=P44XEaO35O4"></iframe>
                        </div>
                        <div className="ppalInfo">
                            <span className="ppalInfo__name"> Christian Camilo Chávez Herrera</span>
                            <img className="ppalInfo__photo" src={TrainerPhoto} />
                            <div className="icons">
                            <img className="icons__icon" onClick={this.hideShowCertificaction2} src={IconCertification} />
                            <img className="icons__icon" onClick={this.hideShowInfoTrainer2}src={IconTrainer} />
                            <img className="icons__icon" onClick={this.hideShowQualification2} src={IconQualification} />
                            <img className="icons__icon" src={IconCortesy} />
                            </div>
                        </div>
                        <div className="personalInfo">
                            {this.state.certificationForm2 && <div className="category">
                                <span className="category__info">Licenciado  en Educación Física de la Universidad de Antioquia</span>
                            </div>}
                            {this.state.certificationForm2 && <div className="category">
                                <span className="category__info">Coach en Fitness Personal -- </span>
                                <span className="category__info"> Coach en Rumba Fitness -- </span>
                                <span className="category__info"> Coach Entrenamiento Funcional</span>
                            </div>}
                            {this.state.infoTrainerForm2 && <div className="category">
                                <span className="category__info">Apasionado por la nutrición saludable, la naturaleza,  el baile urbano y  el fútbol.
                                    Respetuoso por la dedicación, admirador de la prosperidad en la vida por medio de una 
                                    mentalidad positiva y creyente  ferviente que la actitud lo es todo.
                                </span>
                            </div>}    
                            {this.state.qualificationForm2 && <div className="category">
                                <div className="subcategory"> 
                                    <span className="subcategory__info"> Calidad de Entrenamientos </span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <span className="subcategory__info">Servicio (Música, Implementación, Seguimiento y Valoraciones)</span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <span className="subcategory__info">Atención a Sugerencias y mejoras</span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <span className="subcategory__info">Capacidad de Motivación, Mejora en procesos personales </span>
                                    <div className=" subcategory subcategory--column">
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                        <img className="subcategory__stars" src={Stars} />
                                    </div>
                                </div>
                                <img className="submit" src={Valid} />
                                <img className="submit submit--invalid" src={Invalid} />
                            </div>}
                            <div className="category">
                                <span className="category__phrase">“Lo que piensas habitualmente determina en gran medida en lo que te convertirás”   Bruce Lee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HumanTalent;