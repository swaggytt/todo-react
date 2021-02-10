import Card from "../../components/card";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);

  const history = useHistory();

  async function getData() {
    const { data } = await axios.get(`http://localhost:9000/api/tasks/todo`);
    setTasks(data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function onEdit(id) {
    history.push(`/edit/${id}`);
  }

  async function onDone(id) {
    try {
      await axios.patch(`http://localhost:9000/api/tasks/${id}`, {
        isFinished: true,
      });

      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TO DO!</h1>
      {tasks.map((task, i) => (
        <Card
          mode={"default"}
          detail={task}
          onEdit={() => onEdit(task._id)}
          onDone={() => onDone(task._id)}
          key={i}
        />
      ))}
    </div>
  );
};

export default TodoPage;
