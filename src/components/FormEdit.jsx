// import React from 'react'
import { useEffect } from "react";
const FormEdit = ({
  handleSubmitEdit,
  toDo,
  valueEdit,
  focusEdit,
  setValueEdit,
}) => {
  useEffect(() => {
    focusEdit.current.focus();
  }, []);
  return (
    <form
      className="EditToDoForm"
      onSubmit={(e) => handleSubmitEdit(e, toDo.id)}>
      <input
        type="text"
        placeholder="Update me..."
        value={valueEdit}
        ref={focusEdit}
        onChange={(e) => {
          setValueEdit(e.target.value);
        }}
      />
      <button className="editToDo">Update</button>
    </form>
  );
};
FormEdit.propTypes = String;
export default FormEdit;
