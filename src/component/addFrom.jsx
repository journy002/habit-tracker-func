import React from "react";

const AddFrom = ({ onAdd }) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    value && onAdd(value);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="write your habit"></input>
      <button>Add</button>
    </form>
  );
};

export default AddFrom;
