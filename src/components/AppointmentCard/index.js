import { AiOutlineCalendar } from "react-icons/ai";

import { BiTimeFive } from "react-icons/bi";

import "./index.css";

const AppointmentCard = (props) => {
  const { details } = props;

  const { date, name, imageUrl, role } = details;
  const a = new Date(date);
  const num = a.getDate();

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[a.getMonth()];

  const time = a.toLocaleTimeString();

  return (
    <li className="appoint-list-div-li">
      <div className="appoint-container">
        <div className="appoint-div">
          <img src={imageUrl} alt="hai" className="dr-image" />
          <div className="appoint-info">
            <h1 className="dr-name">{name}</h1>
            <p>{role}</p>
            <div className="appoint-time">
              <div className="date-div">
                <AiOutlineCalendar />
                <p className="data-para">
                  {num} {month}
                </p>
              </div>
              <div className="date-div">
                <BiTimeFive />
                <p className="data-para">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default AppointmentCard;
