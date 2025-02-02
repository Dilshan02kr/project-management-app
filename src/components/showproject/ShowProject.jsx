import { useRef } from "react";
import "./ShowProject.css";

export default function ShowProject({
  project,
  onDelete,
  addTask,
  tasks,
  onClear,
}) {
  const taskRef = useRef();

  function saveTask() {
    const task = taskRef.current.value;

    if (task.trim() === "") {
      window.alert("Please Enter a TASK to save!");
      return;
    }

    addTask({
      task: task,
    });
  }

  return (
    <>
      <div className="showproj-container">
        <section>
          <div className="showproj-header">
            <div className="showproj-proj-sec">
              <h3>{project.title}</h3>
              <p className="date">Due Date : {project.duedate}</p>
              <p className="descr">{project.description}</p>
            </div>
            <div className="showproj-dlt-btn">
              <button onClick={onDelete}>Delete</button>
            </div>
          </div>
          <hr />
          <div className="showproj-tasks">
            <h3 className="task-header">Task</h3>
            <div className="task-input">
              <input ref={taskRef} type="text" />
              <button onClick={saveTask}>Add Task</button>
            </div>
            <div className="tasks-sec">
              <ul className="tasks-list">
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <li key={task.id}>
                      <p>{task.task}</p>
                      <button onClick={() => onClear(task.id)}>Clear</button>
                    </li>
                  ))
                ) : (
                  <p>This project does not have any tasks yet</p>
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
