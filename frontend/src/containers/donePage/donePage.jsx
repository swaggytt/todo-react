import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/card";

const DonePage = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios.get(`http://localhost:9000/api/tasks/done`);

      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function unDone(id) {
    try {
      await axios.patch(`http://localhost:9000/api/tasks/${id}`, {
        isFinished: false,
      });
      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }

  async function onDelete(id) {
    try {
      await axios.delete(`http://localhost:9000/api/tasks/${id}`);

      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {tasks.map((task, i) => (
        <Card
          mode={"done"}
          detail={task}
          onDelete={() => onDelete(task._id)}
          unDone={() => unDone(task._id)}
          key={i}
        />
      ))}
    </div>
  );
};

export default DonePage;
