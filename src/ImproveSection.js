import React, { Component } from "react";
import Card from "./Card";
import ImproveHeader from "./ImproveHeader";
class ImproveSection extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <ImproveHeader />
        <div>
          <div className="card-deck ">
            <Card
              name="Warsan"
              image="https://www.docplanner.com/images/warsaw.png"
            />
            <Card
              name="Barcelone"
              image="https://www.docplanner.com/images/barcelona.png"
            />
            <Card
              name="Istanbul"
              image="https://www.docplanner.com/images/istanbul.png"
            />
          </div>
          <div className="card-deck">
            <Card
              name="Rome"
              image="https://www.docplanner.com/images/rome.png"
            />
            <Card
              name="Mexico City"
              image="https://www.docplanner.com/images/mexico-city.png"
            />
            <Card
              name="Curitiba"
              image="https://www.docplanner.com/images/curitiba.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImproveSection;
