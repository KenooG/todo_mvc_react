import './task.scss'


function Task({handleDeleteTask, handleChangeStatus, task, handleContentEditable}) {

    const {id, status, name} = task





    return (

        <li className={status ? 'task done' : 'task' } key={id}>
            <i
                className='taskStatus'
                onClick={() => {
                handleChangeStatus(task)
            }}
                >
            </i>
            <span
                onBlur={(event) => handleContentEditable(event, task)}
                className='taskName'
                contentEditable
            >
                {name}</span>
            <button className='taskDeleteBtn' onClick={() => {
                handleDeleteTask(task)
            }}>x
            </button>
        </li>
    );
}

export default Task;