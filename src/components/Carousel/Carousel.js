import React, { Component } from 'react';

class Carousel extends Component {
    constructor() {
        super();

        this.state = { 
            position: 0, 
        };

        this.renderImage = this.renderImage.bind(this);
        this.clickButtonLeft = this.clickButtonLeft.bind(this);
        this.clickButtonRight = this.clickButtonRight.bind(this);
    }

    renderImage() {
        const { position } = this.state;
        const { images } = this.props;

        return <img className="carousel__image" src={images[position]} />
    }

    clickButtonRight() {
       const { position } = this.state;

       if (position >= 2) {
           this.setState({
               position: 0,
            })
        } else {
           this.setState({ 
               position: position + 1
            })
        }
    }

    clickButtonLeft() {
        const { position } = this.state;
        if (position === 0) {
            this.setState({
                position: 2
            })
         } else {
            this.setState({
                position: position - 1
            })
         }
     }

    componentDidMount(){
        setInterval(() => {
            this.clickButtonRight()
        },  5000);
    }

    render() {
        return (
            <div className="carousel">
                <div>{this.renderImage()}</div>
                <button className="carousel__button carousel__button--left" onClick={this.clickButtonLeft}>&#60;</button>
                <button className="carousel__button carousel__button--right" onClick={this.clickButtonRight}>&#62;</button>
                <div className="dots flex-container">
                    <span className="dots__bts dots__bts--left"></span>
                    <span className="dots__bts"></span>                  
                    <span className="dots__bts dots__bts--right"></span>
                </div>
            </div>
        );
    }
}

export default Carousel;