import { useState, useRef } from "react";
import ListToDo from "./ListToDo";

const items = [];
const CreateToDo = () => {
  const [value, setValue] = useState("");
  const [valueEdit, setValueEdit] = useState("");
  const [toDos, setToDos] = useState(items);
  let nextId = Math.floor(Math.random() * 1000);
  const focus = useRef(null);
  const focusEdit = useRef(null);

  //  let nextId = 0;
  //  const items = []; do not do that

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        id: nextId,
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

    // focusEdit.current.focus();
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
