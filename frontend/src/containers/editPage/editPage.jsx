import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Card from "../../components/card";

const EditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(`http://localhost:9000/api/tasks/${id}`);
    setTask(data);
    console.log(data);
  }

  async function onSubmit(taskName, taskDate) {
    await axios.patch(`http://localhost:9000/api/tasks/${id}`, {
      taskName,
      taskDate,
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Edit</h1>
      <Card onSubmit={onSubmit} mode={"edit"} detail={task} />
    </div>
  );
};

export default EditPage;
