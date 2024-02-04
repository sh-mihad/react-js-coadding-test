import React, { useState } from "react";
import P1Form from "./P1Form";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tasks, setTasks] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };
  // task add handler
  const handleAddTasks = (task) => {
    setTasks([...tasks, task]);
  };

  let displayedTasks;
  if (show === "completed") {
    displayedTasks = tasks
      ?.filter(
        (task) => task?.status.toLowerCase() === "completed"
      )
      ?.map((task, index) => (
        <tr key={index}>
          <td>{task?.name}</td>
          <td>{task?.status}</td>
        </tr>
      ));
  } else if (show === "active") {
    displayedTasks = tasks
      ?.filter((task) => task?.status.toLowerCase() === "active")
      ?.map((task, index) => (
        <tr key={index}>
          <td>{task?.name}</td>
          <td>{task?.status}</td>
        </tr>
      ));
  } else {
    const newTasks = [...tasks];
    displayedTasks = tasks.sort((a, b) =>
      a.status === "active" ? -1 : b.status === "active" ? 1 : 0
    )?.map((task, index) => (
        <tr key={index}>
          <td>{task?.name}</td>
          <td>{task?.status}</td>
        </tr>
      ));
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <P1Form onAddTask={handleAddTasks} />
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>{displayedTasks}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
