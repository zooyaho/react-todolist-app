import React, { useState } from "react";

const ToDoList = () => {
  const [value, setValue] = useState("");
  const changeHadler = (event:React.FormEvent<HTMLInputElement>)=>{
    const {currentTarget : {value}} = event;
    setValue(value);
    console.log(value);
  }
  const submitHandler = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={value} onChange={changeHadler} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;