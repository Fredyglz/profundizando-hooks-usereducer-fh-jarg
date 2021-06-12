import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, idx) => (
                // TodoListItem, todo, index, handleDelete, handleToggle
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    idx={idx}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </ul>
    );
};

export default TodoList;
