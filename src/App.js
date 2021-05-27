import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [tasks, setTasks] = useState(
        [
            {
                    id: 1,
                    text: 'Do it now',
                    day: 'May 26th at 4:35pm',
                    reminder: false,
            },
            {
                    id: 2,
                    text: 'Maybe later',
                    day: 'May 26th at 4:35pm',
                    reminder: false,
            },
            {
                    id: 3,
                    text: 'Urgent',
                    day: 'May 26th at 4:35pm',
                    reminder: false,
            },
        ]
    )

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

    return (
        <div className="container">
            <Header />
            {showAddTask && <AddTask onAdd={addTask} />}
            { tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'No tasks to show'
            )}
        </div>
    );
}

export default App;

