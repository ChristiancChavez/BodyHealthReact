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
                <div className="services">
                    <h3 className="services__title">Obten tus resultados con Profesionalismo</h3>
                    <div className="services__button">
                    <button type="button" className="services__button services__button--bts" ><a href=""></a>Obten tu Cortesia</button>
                    <button type="button" className="services__button services__button--bts" ><a href=""></a>Pide tu Cotización</button>
                    </div>
                    <div className="service">
                        <div className="service__program">
                            <img className="service__program--image" src={Personalized}/>
                            <span className="service__program--title">Personalizado</span>
                        </div>
                        <div className="service__program">
                            <img className="service__program--image" src={Group}/>
                            <span className="service__program--title">Grupal</span> 
                        </div>
                        <div className="service__program">
                            <img className="service__program--image" src={Entrerprise}/>
                            <span className="service__program--title">Empresa Felíz</span> 
                        </div>
                        <div className="service__program">
                            <img className="service__program--image" src={Historys}/>
                            <span className="service__program--title">Historias de Éxito</span>
                        </div>
                        <div className="service__program">
                            <img className="service__program--image" src={Nutrition}/>
                            <span className="service__program--title">Servicios Complementarios</span>
                        </div>
                        <div className="service__program">
                            <input className="service__program--image" />
                            <span className="service__program--title">Nuestros usuarios son felices y aquí lo demuestran</span>
                        </div>
                    </div>
                </div>      
            </div>
        );
    }
}
export default Services;