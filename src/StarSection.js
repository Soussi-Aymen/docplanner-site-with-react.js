import React, { Component } from "react";
import FeatureCard from "./FeatureCard";
class StarSection extends Component {
  state = {};
  render() {
    return (
      <section className="star">
        <div>
          <div className="section-inner">
            <h1 className="title-color">
              The world's biggest healthcare platform
            </h1>
            <p>
              We work from 6 offices all over the world, bringing Docplanner
              Group to life in almost 20 countries.
            </p>
          </div>

          <div className="features">
            <FeatureCard
              icon="https://www.docplanner.com/img/flag.png"
              title="Leader in 8&nbsp;countries"
              description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina
and Chile"
            />
            <FeatureCard
              icon="https://www.docplanner.com/img/visits.png"
              title="600 000 appointments"
              description="booked last month"
            />
            <FeatureCard
              icon="https://www.docplanner.com/img/patients.png"
              title="20 million unique patients"
              description="visit us every month"
            />
            <FeatureCard
              icon="https://www.docplanner.com/img/doctors.png"
              title="35 000 active doctors"
              description=" trust in&nbsp;our solutions"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default StarSection;
