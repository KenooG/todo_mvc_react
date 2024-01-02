import Task from "./Task";
import './tasks.scss'

function Tasks({handleDeleteTask, handleChangeStatus, filter, tasks, handleContentEditable}) {
    return (
        <ul className='tasks'>

            {tasks
                .filter((task) => filter === 'all' ? true : task.status === filter)
                .map((task) => (
                    <Task
                        handleChangeStatus={handleChangeStatus}
                        handleDeleteTask={handleDeleteTask}
                        task={task}
                        handleContentEditable={handleContentEditable}

                    />
                ))}
        </ul>
    );
}

export default Tasks;