import FormEdit from "./FormEdit";
import { nanoid } from "nanoid"; // random id
import { FaTrashCan } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

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
  const handleSubmitEdit = (e, id) => {
    e.preventDefault();
    setToDos((prevIt) =>
      prevIt.map((item) =>
        item.id === id
          ? {
              ...item,
              id: nanoid(),
              text: valueEdit,
              isDone: false,
              isEditing: false,
            }
          : item,
      ),
    );
    setValueEdit("");
  };

  return (
    <>
      {toDos.map((toDo) =>
        toDo.isEditing ? (
          <FormEdit
            handleSubmitEdit={handleSubmitEdit}
            toDo={toDo}
            valueEdit={valueEdit}
            focusEdit={focusEdit}
            setValueEdit={setValueEdit}
          />
        ) : (
          <li
            // onClick={() => handleDone(toDo.id)}
            className={toDo.isDone ? "listItem line" : "listItem"}
            key={toDo.id}>
            {toDo.text}
            <div className="containerButtons">
              <FaTrashCan type="button" onClick={() => handleDelete(toDo.id)} />
              <FaCheck type="button" onClick={() => handleDone(toDo.id)} />
              <FaRegPenToSquare
                type="button"
                onClick={() => handleEdit(toDo.id)}
              />
            </div>
          </li>
        ),
      )}
    </>
  );
};

ListToDo.propTypes = String;
export default ListToDo;
