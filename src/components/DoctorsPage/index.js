import { Component } from "react";
import ValueContext from "../../Context/ValueContext";
import Header from "../Header";
import AppointmentPage from "../AppointmentPage";
import "./index.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "GENERAL & LAPAROSCOPIC SURGEON",
    qulification: "MBBS, IDCCM,",
    exp: "5yrs",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "HAEMATOLOGY",
    qulification: "MD (Pulmonary Medicine), DNB,",
    exp: "20yrs",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "PAEDIATRIC ONCOLOGY ",
    qulification: "MD (Pulmonary Medicine), IDCCM,",
    exp: "6yrs",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "INFECTIOUS DISEASE",
    qulification: "MD (Pulmonary Medicine), IDCCM,",
    exp: "5yrs",
  },
  {
    uniqueNo: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "NEPHROLOGY",
    qulification: "MD (Pulmonary Medicine), IDCCM,",
    exp: "12yrs",
  },
  {
    uniqueNo: 6,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "CLINICAL PSYCHOLOGY",
    qulification: "MD (Pulmonary Medicine), IDCCM,",
    exp: "16yrs",
  },
  {
    uniqueNo: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "NEURO PSYCHIATRY",
    qulification: "MD (Pulmonary Medicine), IDCCM,",
    exp: "7yrs",
  },
  {
    uniqueNo: 8,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "PULMONOLOGY/ RESPIRATORY MEDICINE ",
    qulification: "MD (Pulmonary Medicine), IDCCM",
    exp: "9yrs",
  },
];

class DoctorsPage extends Component {
  state = {
    date: "",
    newList: initialUserDetailsList,
    valueList: [],
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  render() {
    const { newList, date, valueList } = this.state;
    return (
      <ValueContext.Consumer>
        {(value) => {
          const { onClickSlotBook } = value;
          const slotBooking = (eachItem) => {
            onClickSlotBook({ ...eachItem, date });
          };

          return (
            <>
              <Header />
              <div className="doctors-div">
                <ul className="ul-list">
                  {newList.map((eachItem) => (
                    <li className="li-list-item" key={eachItem.uniqueNo}>
                      <div className="doctor-info-div">
                        <img
                          src={eachItem.imageUrl}
                          alt={eachItem.name}
                          className="doctor-img"
                        />
                        <div className="doctor-inf">
                          <p className="dr-title">{eachItem.name}</p>
                          <p className="dr-info">{eachItem.role}</p>
                          <p className="dr-info">{eachItem.qulification}</p>
                          <p className="dr-info">{eachItem.exp}</p>
                        </div>
                      </div>
                      <div className="booking-time-div">
                        <input
                          type="datetime-local"
                          value={date}
                          onChange={this.onChangeDate}
                        />
                        <button
                          type="button"
                          className="btn-book"
                          onClick={() => slotBooking(eachItem)}
                        >
                          Book A Doctor
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          );
        }}
      </ValueContext.Consumer>
    );
  }
}

export default DoctorsPage;
