import React from "react";
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask  }) {
  const task = tasks.map(info=><Task key={info.text} text={info.text} category={info.category} onDeleteTask={onDeleteTask}/>)
function TaskList() {
  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
