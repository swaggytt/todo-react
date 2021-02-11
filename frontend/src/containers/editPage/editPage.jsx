import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/card";

const EditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(`https://swaggy-todo.herokuapp.com/api/tasks/${id}`);
    setTask(data);
  }

  async function onSubmit(taskName, taskDate) {
    await axios.patch(`https://swaggy-todo.herokuapp.com/api/tasks/${id}`, {
      taskName,
      taskDate,
    });
    history.push(`/`);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="edit-page">
      <h1 style={{ textAlign: "center" }}>Edit</h1>
      <Card onSubmit={onSubmit} mode={"edit"} detail={task} />
    </div>
  );
};

export default EditPage;
