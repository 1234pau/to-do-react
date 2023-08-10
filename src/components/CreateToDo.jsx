import { useState, useRef } from "react";
import { nanoid } from "nanoid"; // random id
import ListToDo from "./ListToDo";

const items = [];
const CreateToDo = () => {
  const [value, setValue] = useState("");
  const [valueEdit, setValueEdit] = useState("");
  const [toDos, setToDos] = useState(items);
  const focus = useRef(null);
  const focusEdit = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        id: nanoid(),
        text: value,
        isDone: false,
        isEditing: false,
      },
    ]);
    setValue("");
    focus.current.focus();
  };

  const handleDelete = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
    console.log("delete");
  };
  const handleDone = (id) => {
    const it = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, isDone: !toDo.isDone };
      }
      return toDo;
    });
    setToDos(it);
    console.log("line trough (done)");
  };
  const handleEdit = (id) => {
    const it = toDos.map((toDo) => {
      if (toDo.id === id) {
        setValueEdit(toDo.text);
        return { ...toDo, isEditing: !toDo.isEditing };
      }
      if (toDo.isEditing) {
        return { ...toDo, isEditing: !toDo.isEditing };
      }
      return toDo;
    });
    setToDos(it);
  };
  return (
    <>
      <form className="CreateToDoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add something..."
          value={value}
          ref={focus}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="addToDo">Add</button>
      </form>
      <ul className="containerList">
        <ListToDo
          toDos={toDos}
          setToDos={setToDos}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          valueEdit={valueEdit}
          setValueEdit={setValueEdit}
          focusEdit={focusEdit}
        />
      </ul>
    </>
  );
};

export default CreateToDo;
