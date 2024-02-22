import React,{useState} from 'react'

function Controlled() {
    let [inputValue, setInputValue] = useState("");
    let updateInput = e => {
      setInputValue(e.target.value);
    };
    return (
      <div>
        <form>
            <label >Controlled: </label>
          <input type="text" value={inputValue} onChange={updateInput} />
        </form>
      </div>
    );
}

export default Controlled