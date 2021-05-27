import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
            { tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'No tasks to show'
            )}
        </div>
    );
}

export default App;

