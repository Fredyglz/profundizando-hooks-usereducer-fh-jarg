import React from "react";

const TodoListItem = ({ todo, idx, handleDelete, handleToggle }) => {
    return (
        <li className="list-group-item">
            <p
                className={`${todo.done && "complete"}`}
                onClick={() => handleToggle(todo.id)}
            >
                {idx + 1}.- {todo.desc}
            </p>
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

export default TodoListItem;
