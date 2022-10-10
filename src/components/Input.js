import React, { useRef } from "react";
import useStore from "../stores/PersonStore";

const Input = () => {
  const addPerson = useStore((state) => state.addPerson);
  const inputRef = useRef();
  const add = () => {
    addPerson(inputRef.current.value);
  };

  return (
    <div>
      Input:
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add list</button>
    </div>
  );
};

export default Input;
