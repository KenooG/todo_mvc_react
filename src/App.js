import {useState} from "react";

function App() {

    const [value, setValue] = useState('')

    function handleInput(){


    }

  return (
    <div>
    <h1>todos</h1>
        <div>
            <input type="text" value={value} placeholder='What needs to be done?'/>
        </div>
    </div>
  );
}

export default App;
