import React, { Component } from 'react';
import guideIcon from '../../Assets/images/guideIcon.png';
import tracingIcon from '../../Assets/images/tracingIcon.png';
import assesstmentIcon from '../../Assets/images/assesstmentIcon.png';
import resultsIcon from '../../Assets/images/resultsIcon.png';


class Benefits extends Component {
    render() {
        return (
            <div className="benefits">
                <div className="benefits_guide">
                    <span className="benefits_guide-icon"> Guia profesional a Domicilio</span>
                    <img src={guideIcon}/>
                </div>
                <div className="benefits_tracing">
                    <span className="benefits_tracing-icon"> Seguimiento con tecnología cada entrenamiento</span>
                    <img src={tracingIcon}/>
                </div>
                <div className="benefits_assesstments">
                    <span className="benefits_assesstments-icon"> Tamizajes y valoraciones físicas periódicas</span>
                    <img src={assesstmentIcon}/>
                </div>
                <div className="benefits_results">
                    <span className="benefits_results-icon"> Visualización y análisis de resultados</span>
                    <img src={resultsIcon}/>
                </div>
            </div>
        );
    }
}

export default Benefits;