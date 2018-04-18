import React, { Component } from 'react';
import Facebook from '../../Assets/images/facebook-icon.png';
import Instagram from '../../Assets/images/instagram-icon.png';
import Whatsapp from '../../Assets/images/Whatsapp-icon.png'; 

class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={Facebook}/>
                    <span className="facebook"> @BodyhealthFWClub</span>
                    <img src={Instagram}/>
                    <span className="Instagram"> @Bodyhealthfw</span>
                    <img src={Whatsapp}/>
                    <span className="Whatsapp"> 3106909066</span>
                </div>
                <div>
                    <input className="input" placeholder="Chatea con nosotros"/>
                </div>
                <div>
                    <span className="events"> Eventos Fitness y Bienestar de Ciudad</span>
                </div>
            </div>
        );
    }
}

export default Footer;