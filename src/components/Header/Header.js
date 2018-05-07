import React, { Component } from 'react';
import logoIcon from '../../Assets/images/logoIcon.png';
import logo from '../../Assets/images/logo.png';

class Header extends Component {
    constructor() {
        super();
        this.state = { 
            programSubMenuOpen: false,
            newsSubMenuOpen: false,
            aboutUsSubMenuOpen: false,
        };
        this.hideShowPrograms = this.hideShowPrograms.bind(this);
        this.hideShowNews = this.hideShowNews.bind(this);
        this.hideShowAboutUs = this.hideShowAboutUs.bind(this);
    }
        
    hideShowPrograms() {
        const { programSubMenuOpen } =  this.state;
        this.setState({
            programSubMenuOpen: !programSubMenuOpen
        })
    }

    hideShowNews() {
        const { newsSubMenuOpen } =  this.state;
        this.setState({
            newsSubMenuOpen: !newsSubMenuOpen
        })
    }

    hideShowAboutUs() {
        const { aboutUsSubMenuOpen } =  this.state;
        this.setState({
            aboutUsSubMenuOpen: !aboutUsSubMenuOpen
        })
    }


    render() {
        return (
            <div>
                <div className="background">
                    <img className="header__title-logo" src={logo}/>
                    <div className="header">
                        <a href="" className="header__title">¿Porque somos la mejor opción?</a>
                        <span onClick={this.hideShowPrograms} className="header__title">Programas Body Health</span>
                        <span onClick={this.hideShowNews} className="header__title">Novedades</span>
                        <span onClick={this.hideShowAboutUs} className="header__title">Sobre Nosotros</span>
                        <a href="" className="header__title">Historias de Éxito</a>
                        <div className="users flex-container">
                        <button type="button" className="users__login">
                            <img className="users__login-icon"src={logoIcon}/>
                            <span className="users__login-title">MI RENDIMIENTO</span>
                        </button>
                    </div>
                    </div>
                    {this.state.programSubMenuOpen && <div className="togglePrograms">
                        <a href=""className="togglePrograms__options" >Grupal</a>
                        <a href=""className="togglePrograms__options" >Personalizado</a>
                        <a href=""className="togglePrograms__options" >Empresarial</a>
                        <a href=""className="togglePrograms__options" >Servicios Adicionales</a>
                    </div>}
                    {this.state.newsSubMenuOpen && <div className="toggleNews">
                        <a href=""className="toggleNews__options" >Retos Fitness</a>
                        <a href=""className="toggleNews__options" >Post Informativos</a>
                        <a href=""className="toggleNews__options" >Eventos Fitness-Wellness</a>
                    </div>}
                    {this.state.aboutUsSubMenuOpen && <div className="toggleAboutUs">
                        <a href=""className="toggleAboutUs__options" >Opiniones</a>
                        <a href=""className="toggleAboutUs__options" >Talento Humano</a>
                    </div>}
                </div>
            </div>
        );
    }  
}



export default Header;