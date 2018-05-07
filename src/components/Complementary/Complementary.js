import React, { Component } from 'react';


class Complementary extends Component {
    render() {
        return (
            <div>
                <div className="complementary">
                    <div className="complementary__title">
                        <span>ESTOS SERVICIOS TE AYUDAN Y POTENCIAN PARA LOGRAR TUS METAS</span>
                    </div>
                    <div className="complementary__nutrition">
                        <span className="complementary__subtitle"> NUTRICIÓN</span>
                    </div>
                    <div className="complementary__fisioterapy">
                        <span className="complementary__subtitle"> FISIOTERAPIA</span>
                    </div>
                    <div className="complementary__massage">
                        <span className="complementary__subtitle"> MASAJES</span>
                    </div>
                    <div className="complementary__valuations and plans">
                        <span className="complementary__subtitle">PLANES Y VALORACIONES </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Complementary;