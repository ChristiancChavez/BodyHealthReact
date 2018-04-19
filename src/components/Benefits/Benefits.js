import React, { Component } from 'react';
import guideIcon from '../../Assets/images/guideIcon.png';
import tracingIcon from '../../Assets/images/tracingIcon.png';
import assesstmentIcon from '../../Assets/images/assesstmentIcon.png';
import resultsIcon from '../../Assets/images/resultsIcon.png';


class Benefits extends Component {
    render() {
        return (
            <div>  
                <div className="benefits">
                    <div className="benefits__program">
                        <span className="benefits__program__title">Guia Profesional a Domicilio</span>
                    </div>
                    <div className="benefits__program">
                        <span className="benefits__program__title">Seguimiento con Tecnología cada Entrenamiento</span> 
                    </div>
                    <div className="benefits__program">
                        <span className="benefits__program__title">Tamizaje y Valoraciones periodicas</span> 
                    </div>
                    <div className="benefits__program">
                        <span className="benefits__program__title">Visualización y Análisis de Resultados</span> 
                    </div>
                </div>
                <div className="benefits">
                    <div className="benefits__program">
                        <img className="benefits__program__image--padding" src={guideIcon}/>   
                    </div>
                    <div className="benefits__program">
                        <img className="benefits__program__image--padding" src={tracingIcon}/>
                    </div>
                    <div className="benefits__program">
                        <img className="benefits__program__image--small benefits__program__image--position" src={assesstmentIcon}/>   
                    </div>
                    <div className="benefits__program">
                        <img className="benefits__program__image--small" src={resultsIcon}/>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Benefits;






