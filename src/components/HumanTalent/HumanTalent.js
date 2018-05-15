import React, { Component } from 'react';
import TrainerPhoto from '../../Assets/images/personalTrainerPhoto.png';
import IconQualification from '../../Assets/images/star.png';
import IconCertification from '../../Assets/images/icon-certification.png';
import IconPhrase from '../../Assets/images/icon-phrase.png';
import IconTrainer from '../../Assets/images/logoIcon.png';
import Stars from '../../Assets/images/stars.jpg';
import Valid from '../../Assets/images/valid.png';
import Invalid from '../../Assets/images/invalid.png';





class HumanTalent extends Component {
    render() {
        return(
            <div>
                <div className="humanTalent">
                    <h1 className="humanTalent__title"> Estos son nuestros entrenadores que pondrán a tu servivio su profesionalismo y 
                        mejor acompañamiento,  los cuales estarán siempre disponibles guiandote para mejorar tu cuerpo, 
                        transformar tu vida y conseguir tus metas </h1>

                    <div className="profile">
                        <div className="ppalInfo">
                            <span className="ppalInfo__name"> Christian Camilo Chávez Herrera</span>
                            <img className="ppalInfo__photo" src={TrainerPhoto} />
                            <div className="icons">
                            <img className="icons__icon" src={IconCertification} />
                            <img className="icons__icon" src={IconTrainer} />
                            <img className="icons__icon" src={IconQualification} />
                            <img className="icons__icon" src={IconPhrase} />
                            </div>
                        </div>
                        <div className="personalInfo">
                            <div className="category">
                                <span className="category__info">Licenciado  en Educación Física de la Universidad de Antioquia</span>
                            </div>
                            <div className="category">
                                <span className="category__info">Coach en Fitness Personal -- </span>
                                <span className="category__info"> Coach en Rumba Fitness -- </span>
                                <span className="category__info"> Coach Entrenamiento Funcional</span>
                            </div>
                            <div className="category">
                                <span className="category__info">Apasionado por la nutrición saludable, la naturaleza,  el baile urbano y  el fútbol.
                                    Respetuoso por la dedicación, admirador de la prosperidad en la vida por medio de una 
                                    mentalidad positiva y creyente  ferviente que la actitud lo es todo.
                                </span>
                            </div>    
                            <div className="category">
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
                            </div>
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