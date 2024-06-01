import { useState } from "react";
import Header  from "./components/Header";
import Tasks from "./components/Tasks";

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
  console.log('delete ', id)
  setTasks(tasks.)
}


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;