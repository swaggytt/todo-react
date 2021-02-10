import "./Card.scss";
import { useEffect, useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Card = ({ onSubmit, mode, detail, onDelete, onEdit, onDone, unDone }) => {
  const [task, setTask] = useState("");
  const [stateCalender, setStateCalender] = useState(false);
  const [taskDate, setTaskDate] = useState(new Date());

  useEffect(() => {
    if (mode === "edit") {
      setTask(detail?.taskName);
      setTaskDate(detail?.taskDate);
      setStateCalender(false);
    }
    // eslint-disable-next-line
  }, [detail]);

  console.log(taskDate);
  // console.log(mode)

  return (
    <>
      {mode === "default" || mode === "done" ? (
        <div className="card">
          <div className="content-2">
            <p>
              To do: <b>{detail.taskName}</b>
            </p>
            <p>
              at: <b style={{ color: "gray" }}>{detail.taskDate}</b>
            </p>
          </div>
          {mode !== "done" && (
            <div className="btn">
              <button onClick={onDone}>
                <i className="fas fa-check-square"></i>
              </button>
              <button onClick={onEdit}>
                <i className="fas fa-edit"></i>
              </button>
            </div>
          )}
          {mode === "done" && (
            <div className="btn">
              <button onClick={unDone}>
                <i class="fas fa-undo-alt"></i>
              </button>
              <button onClick={onDelete}>
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="card">
          <form
            className="content"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(task, taskDate);
            }}
          >
            <input
              type="text"
              value={task}
              placeholder="Do something..."
              onChange={(e) => setTask(e.target.value)}
              required
            ></input>
            <button type="submit">
              <i className="fas fa-save save"></i>
            </button>
          </form>
          <div className="calender-input">
            <button
              onClick={() => setStateCalender(!stateCalender)}
              className="calendar-btn"
            >
              <i className="fas fa-calendar-minus calender-font"></i>
            </button>
            {new Date(taskDate).toLocaleString("th-TH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {stateCalender && (
              <Calender
                className="calendar-pop"
                onClickDay={(value) => {
                  setStateCalender(false);
                  setTaskDate(value);
                }}
                value={taskDate}
              ></Calender>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
