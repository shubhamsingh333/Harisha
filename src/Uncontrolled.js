import React,{useState} from 'react'

function Uncontrolled() {
    let a = React.createRef();
    
    let handleSubmit = e => {
      alert(`Input value: ${a.current.value}`);
      e.preventDefault();
    };
    return (
      <div>
        <label >Uncontrolled: </label>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={a} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Uncontrolled