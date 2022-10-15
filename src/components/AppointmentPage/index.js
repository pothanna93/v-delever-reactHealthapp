import { Component } from "react";
import ValueContext from "../../Context/ValueContext";

import DoctorsPage from "../DoctorsPage";
import AppointmentCard from "../AppointmentCard";

import "./index.css";

const AppointmentPage = () => (
  <ValueContext.Consumer>
    {(value) => {
      const { listItems } = value;
      const zero = listItems.length === 0;

      return (
        <>
          {zero ? (
            <p className="no-appointment">
              Hey,user You don't have any appointments
            </p>
          ) : (
            <div className="appointment-div-slide">
              <ul className="ul-appoint-list">
                {listItems.map((item) => (
                  <AppointmentCard details={item} key={item.uniqueNo} />
                ))}
              </ul>
            </div>
          )}
        </>
      );
    }}
  </ValueContext.Consumer>
);

export default AppointmentPage;
