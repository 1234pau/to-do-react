import { useState, useRef, useEffect } from "react";
const ListToDo = ({
  toDos,
  handleDelete,
  handleDone,
  handleEdit,
  valueEdit,
  setValueEdit,
  setToDos,
  focusEdit,
}) => {
  let nextId = Math.floor(Math.random() * 1000);
  const handleSubmitEdit = (e, id) => {
    e.preventDefault();
    setToDos((prevIt) =>
      prevIt.map((item) =>
        item.id === id
          ? {
              ...item,
              id: nextId,
              text: valueEdit,
              isDone: false,
              isEditing: false,
            }
          : item,
      ),
    );
    console.log(toDos);
    setValueEdit("");
  };

  return (
    <>
      {toDos.map((toDo) =>
        toDo.isEditing ? (
          <form className="" onSubmit={(e) => handleSubmitEdit(e, toDo.id)}>
            <input
              type="text"
              placeholder="Update me..."
              value={valueEdit}
              ref={focusEdit}
              onChange={(e) => {
                setValueEdit(e.target.value);
              }}
            />
            <button className="">Update</button>
          </form>
        ) : (
          <li
            className={toDo.isDone ? "listItem line" : "listItem"}
            key={toDo.id}>
            {toDo.text}
            <button onClick={() => handleDelete(toDo.id)}>Delete</button>
            <button onClick={() => handleDone(toDo.id)}>Done</button>
            <button onClick={() => handleEdit(toDo.id)}>Edit</button>
          </li>
        ),
      )}
    </>
  );
};

ListToDo.propTypes = String;
export default ListToDo;
