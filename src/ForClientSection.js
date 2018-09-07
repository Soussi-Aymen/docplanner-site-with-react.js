import React, { Component } from "react";
import ServiceCard from "./ServiceCard";

class ForClientSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="clients side-para">
          <ServiceCard
            service={{
              title: "Save time managing visits and cut no-shows by half",
              category: "For doctors",
              background: "#4293db",
              image: "https://www.docplanner.com/img/screen-saas@2x.png"
            }}
          />
          <ServiceCard
            innerJsx={
              <div className="select">
                <select>
                  <option>Select Country</option>
                  <option>ARGENTINA</option>
                  <option>AUSTRALIA</option>
                  <option>BRAZIL</option>
                  <option>CHILE</option>
                  <option>COLOMBIA</option>
                  <option>CZECH</option>
                  <option>ITALIE</option>
                  <option>MEXICO</option>
                  <option>PERU</option>
                  <option>PORTUGAL</option>
                  <option>SPAIN</option>
                  <option>URUGUAY</option>
                  <option>UK</option>
                </select>
              </div>
            }
            service={{
              category: "For patients",
              title: "Find a doctor, book a visit and solve...",
              background: "#5dc6b0",
              image: "https://www.docplanner.com/img/screen-marketplace@2x.png"
            }}
          />
        </div>

        <div>
          <h1 className="title-color">
            We are a global company with local culture
          </h1>
        </div>
      </div>
    );
  }
}

export default ForClientSection;
