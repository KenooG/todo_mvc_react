import InputTask from "./InputTask";
import './inputWrapper.scss'
import ToggleStatuses from "../toggleStatuses/ToggleStatuses";

function InputWrapper({value, handleInput, handleAddTask, handleAllDone, doneAll, tasks}) {


    return (
        <div className='inputWrapper'>
            {!!tasks.length && (
            <ToggleStatuses
              handleAllDone={handleAllDone}
              doneAll={doneAll}
            />
                   )}
            <InputTask
            value={value}
            handleInput={handleInput}
            handleAddTask={handleAddTask}/>
        </div>
    );
}

export default InputWrapper;