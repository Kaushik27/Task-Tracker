import { useState } from "react";
import Header  from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'June 5 at 7:00pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Playtime with Oscar',
        day: 'Feb 6 at 2:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Project Interview',
        day: 'Feb 7 at 2:00pm',
        reminder: false
    }
]) 

// Delete task
const deleteTask = (id) => {
  console.log('delete ', id)
  setTasks(tasks.filter((task) => task.id != id))
}

// Toggle reminder
const toggleReminder = (id) => {
  console.log('toggle ', id)
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  );
}


  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;