import React, { Component } from 'react';
import logoIcon from '../../Assets/images/logoIcon.png';
import logo from '../../Assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <div >
                <div className="background">
                    <img className="header__title-logo" src={logo}/>
                    <div className="header">
                        <span className="header__title">¿Porque somos la mejor opción?</span>
                        <span className="header__title">Programas Body Health</span>
                        <span className="header__title">Novedades</span>
                        <span className="header__title">Opiniones</span>
                        <span className="header__title">Talénto humano</span>
                        <span className="header__title">Historias de Éxito</span>
                    </div>
                    <div className="users flex-container">
                        <button type="button" className="users__login">
                            <img className="users__login-icon"src={logoIcon}/>
                            <span className="users__login-title">MI RENDIMIENTO</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }  
}

export default Header;