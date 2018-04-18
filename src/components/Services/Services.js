import React, { Component } from 'react';
import Personalized from '../../Assets/images/personalized.jpg';
import Group from '../../Assets/images/group.jpg';
import Entrerprise from '../../Assets/images/enterprise.jpg';
import Historys from '../../Assets/images/historys.jpg';
import Nutrition from '../../Assets/images/nutrition.jpg';

class Services extends Component {
    render(){
        return (
            <div> 
                <section className="services flex-container">
                    <h3 className="services__title">Obten tus resultados con Profesionalismo</h3>
                    <div className="services__button">
                    <button type="button" className="services__button services__button--bts" ><a href=""></a>Obten tu Cortesia</button>
                    <button type="button" className="services__button services__button--bts" ><a href=""></a>Pide tu Cotización</button>
                    </div>
                    <div className="service">
                        <div className="service__program">
                            <span className="service__program--title">Personalizado</span>
                            <img className="service__program--image" src={Personalized}/>
                        </div>
                        <div className="service__program">
                            <span className="service__program--title">Grupal</span>
                            <img className="service__program--image" src={Group}/> 
                        </div>
                        <div className="service__program">
                            <span className="service__program--title">Empresa Felíz</span>
                            <img className="service__program--image" src={Entrerprise}/> 
                        </div>
                        <div className="service__program">
                            <span className="service__program--title">Historias de Éxito</span>
                            <img className="service__program--image" src={Historys}/>
                        </div>
                        <div className="service__program">
                            <span className="service__program--title">Servicios Complementarios</span>
                            <img className="service__program--image" src={Nutrition}/>
                        </div>
                        <div className="service__program">
                            <span className="service__program--title">Nuestros usuarios son felices y aquí lo demuestran</span>
                            <input className="service__program--image" />
                        </div>
                    </div>
                </section>      
            </div>
        );
    }
}
export default Services;