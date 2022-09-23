import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [work, setWork] = useState(TASKS);
  const [details, setDetails] = useState("All");
  
  function callWorked (data){
    setWork([...work, data])
  }
  
  function handleDeleteTask(deletedTaskText) {
    setWork(work.filter((task) => task.text !== deletedTaskText));
  }
  
  const visibleTasks = work.filter(
    task => details === "All" || task.category === details
  );
  
  
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter />
        <NewTaskForm />
        <TaskList />
        <CategoryFilter categories={CATEGORIES}
                        selectedCategory={details}
                        onSelectCategory={setDetails}
        />
        <NewTaskForm callWork={callWorked}  categories={CATEGORIES.filter((cat) => cat !== "All")}/>
        <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks}/>
      </div>
    );
  }