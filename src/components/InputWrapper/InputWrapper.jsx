import InputTask from "./InputTask";
import './inputWrapper.scss'
import ToggleStatuses from "../toggleStatuses/ToggleStatuses";

function InputWrapper({ handleAddTask, handleAllDone, doneAll, tasks}) {


    return (
        <div className='inputWrapper'>
            {!!tasks.length && (
            <ToggleStatuses
              handleAllDone={handleAllDone}
              doneAll={doneAll}
            />
                   )}
            <InputTask


            handleAddTask={handleAddTask}/>
        </div>
    );
}

export default InputWrapper;