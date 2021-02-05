import "./Card.scss";
import { useState } from "react";

const Card = () => {

const [text,setText] = useState("")

  return (
    <div className="card">
      <input
        type="text"
        value={text}
        placeholder="Do something..."
        onChange={(e) => setText(e.target.value)}
      ></input>
    </div>
  );
};

export default Card;
