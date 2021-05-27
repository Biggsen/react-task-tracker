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

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} />
        </div>
    );
}

export default App;

