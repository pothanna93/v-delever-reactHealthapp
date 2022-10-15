import { Component } from "react";
import { BsEmojiSmile, BsBellFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { VscOutput } from "react-icons/vsc";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { ImLab } from "react-icons/im";
import Header from "../Header";
import AppointmentPage from "../AppointmentPage";
import Discounts from "../Discounts";

import "./index.css";

class HomePage extends Component {
  services = () => (
    <ul className="ul-services">
      <li className="list-item">
        <Link to="/consultation" className="link">
          <div className="consult-div">
            <VscOutput color="red" />
            <p>Consultations</p>
          </div>
        </Link>
      </li>

      <li className="list-item">
        <Link to="/medicines" className="link">
          <div className="consult-div">
            <AiOutlineMedicineBox color="red" />
            <p>Medicines</p>
          </div>
        </Link>
      </li>
      <li className="list-item">
        <Link to="/labs" className="link">
          <div className="consult-div">
            <ImLab color="red" />
            <p>Laboratories</p>
          </div>
        </Link>
      </li>
    </ul>
  );

  render() {
    return (
      <>
        <Header />
        <div className="home-app-container">
          <div className="home-responsive-div">
            <div className="search-test-report-div">
              <div className="search-container">
                <input type="search" className="input-element" />
                <BsSearch className="search-icon" />
              </div>
              <div className="test-report">
                <Link to="/labs" className="test-link">
                  Go to your Lab Reports
                </Link>
              </div>
            </div>
            <h1 className="service-title">SERVICES</h1>
            {this.services()}
            <h1 className="service-title">Upcoming Appointments</h1>
            <div className="appointment-div">
              <AppointmentPage />
            </div>
            <h1 className="service-title">Discounts</h1>
            <div className="discount-container">
              <Discounts />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
