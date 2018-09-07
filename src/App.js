import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Navigation from "./Navigation";
import HeaderSection from "./HeaderSection";
import IntroSection from "./IntroSection";
import ForClientSection from "./ForClientSection";
import ImproveSection from "./ImproveSection";
import StarSection from "./StarSection";
import Footer from "./Footer";
/*     
        
        
        
         
        */

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeaderSection />
        <IntroSection />
        <ForClientSection />

        <StarSection />
        <ImproveSection />
        <Footer />
      </div>
    );
  }
}

export default App;
