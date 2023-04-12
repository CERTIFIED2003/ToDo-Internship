import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
    // We are getting localstorage's todoList data and storing them to localTodoList
    const localTodoList = localStorage.getItem("todoList");

    // If there is data in localstorage about todoList, then we're parsing it and returning it from this function call
    if (localTodoList) return JSON.parse(localTodoList);
    // If we don't find todoList's data in localstorage, then we're setting an empty array in localstorage's todoList and returning an empty array from this function call
    localStorage.setItem("todoList", JSON.stringify([]));
    return [];
};

const initialValue = {
    todoList: getInitialTodos(),
};

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            // Getting User's todo list from Localstorage
            const todoList = localStorage.getItem("todoList");
            // If we have todoList, then we are creating an array of todoList by parsing it
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                // Pushing the todos to the todoListArr
                todoListArr.push({
                    ...action.payload,
                });
                // Setting the todoList's localstorage again with the new array todoListArr
                localStorage.setItem("todoList", JSON.stringify(todoListArr));
            }
        },
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;