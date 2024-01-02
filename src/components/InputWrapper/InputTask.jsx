
import './inputWrapper.scss'

function InputTask({handleAddTask, handleInput, value}) {
    return (
        <input
            className='inputTask'
            type="text"
            onKeyUp={handleAddTask}
            onChange={handleInput}
            value={value}
            placeholder='What needs to be done?'
        />
    );
}

export default InputTask;