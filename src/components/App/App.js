import React, { Component } from 'react';
import Header from '../Header/Header';
import ModalPpal from '../ModalPpal/ModalPpal';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Video from '../Video/Video';
import '../../Assets/Stylesheet/main.css';
// import Carousel from '../Carousel/Carousel';
import WhiteLogo from '../../Assets/images/whiteLogo.jpg';
// import womenProfile from '../../Assets/images/womenProfile.jpg';
// import menProfile from '../../Assets/images/menProfile.jpg';
import Cortesy from '../Cortesy/Cortesy';
import Quotation from '../Quotation/Quotation';
import Complementary from '../Complementary/Complementary';
import HumanTalent from '../HumanTalent/HumanTalent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ModalPpal />
        <Video />
        <Services />
        <Complementary />
        <HumanTalent />
        <img className="PpalLogo" src={WhiteLogo}/>
        <Benefits />
        <Cortesy />
        <Quotation />
        {/* <Carousel  images={[WhiteLogo, womenProfile, menProfile]}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
