import React, { Component } from 'react';
import logoIcon from '../../Assets/images/logoIcon.png';
import logo from '../../Assets/images/logo.png';

class Header extends Component {
    constructor() {
        super();
        this.state = { 
            programSubMenuOpen: false,
            newsSubMenuOpen: false,
            opinionsSubMenuOpen: false,
        };
        this.hideShowPrograms = this.hideShowPrograms.bind(this);
        this.hideShowNews = this.hideShowNews.bind(this);
        this.hideShowOpinions = this.hideShowOpinions.bind(this);
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

    hideShowOpinions() {
        const { opinionsSubMenuOpen } =  this.state;
        this.setState({
            opinionsSubMenuOpen: !opinionsSubMenuOpen
        })
    }


    render() {
        return (
            <div>
                <div className="background">
                    <img className="header__title-logo" src={logo}/>
                    <div className="header">
                        <a href="" id="headerTitle" className="header__title">¿Porque somos la mejor opción?</a>
                        <span onClick={this.hideShowPrograms} className="header__title">Programas Body Health</span>
                        <span onClick={this.hideShowNews} className="header__title">Novedades</span>
                        <span onClick={this.hideShowOpinions} className="header__title">Opiniones</span>
                        <a href="" className="header__title">Talénto humano</a>
                        <a href="" className="header__title">Historias de Éxito</a>
                    </div>
                    {this.state.programSubMenuOpen && <div className="togglePrograms ">
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
                    {this.state.opinionsSubMenuOpen && <div className="toggleOpinions">
                        <a href=""className="toggleOpinions__options" >Grupal</a>
                        <a href=""className="toggleOpinions__options" >Personalizado</a>
                        <a href=""className="toggleOpinions__options" >Empresarial</a>
                        <a href=""className="toggleOpinions__options" >Servicios Adicionales</a>
                    </div>}
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