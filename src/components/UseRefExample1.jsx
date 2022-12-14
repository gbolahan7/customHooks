import React from "react";
import { useRef } from "react";

export default function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Hello'
    paraRef.current.innerText = 'Goodbye'
    
  }



  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>useref</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          value=""
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p ref={paraRef}>Hello</p>
      </form>
    </div>
  );
}
