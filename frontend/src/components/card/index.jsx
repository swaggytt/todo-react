import "./Card.scss";
import { useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Card = () => {
  const [text, setText] = useState("");
  const [stateCalender, setStateCalender] = useState(false);
  const [taskDate, setTaskDate] = useState(new Date());

  // console.log(taskDate);

  return (
    <div className="card">
      <div className="content">
        <input
          type="text"
          value={text}
          placeholder="Do something..."
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button>
          <i className="fas fa-check-circle check"></i>
        </button>
      </div>
      <div className="calender-input">
        <button
          onClick={() => setStateCalender(!stateCalender)}
          className="calendar-btn"
        >
          <i className="fas fa-calendar-minus calender-font"></i>
        </button>
        {stateCalender && (
          <Calender className='calendar-pop' onClickDay={(value)=>{setStateCalender(false);setTaskDate(value)}} value={taskDate}></Calender>
        )}
      </div>
      {new Date(taskDate).toLocaleString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  );
};

export default Card;
