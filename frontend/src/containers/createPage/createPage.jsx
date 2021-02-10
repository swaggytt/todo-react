import Card from "../../components/card";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreatePage = () => {
  const history = useHistory();

  async function onSubmit(task, taskDate) {
    await axios.post(`http://localhost:9000/api/tasks`, {
      taskName: task,
      taskDate: taskDate,
    });
    console.log("Active");
    history.push(`/`);
  }

  return (
    <div>
      <Card onSubmit={onSubmit} mode={"create"} />
    </div>
  );
};

export default CreatePage;
