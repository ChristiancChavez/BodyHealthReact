import React, { Component } from 'react';
import Facebook from '../../Assets/images/facebook-icon.png';
import Instagram from '../../Assets/images/instagram-icon.png';
import Whatsapp from '../../Assets/images/Whatsapp-icon.png'; 
import events from '../../Assets/images/events.png'; 

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="networks">
                    <div className="events">
                        <span className="events__text"> Eventos Fitness y Bienestar de Ciudad</span>
                        <img className="events__icon" src={events}/>
                    </div>
                    <div className="chat">
                        <input className="chat__input" placeholder="Chatea con nosotros"/>
                    </div>
                    <div className="network">
                        <img className="network__icon" src={Facebook}/>
                        <img className="network__icon" src={Instagram}/>
                        <img className="network__icon" src={Whatsapp}/>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Footer;