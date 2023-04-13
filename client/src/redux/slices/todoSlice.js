import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => {
    // We are getting localstorage's user data and storing them to localUser
    const localUser = localStorage.getItem("user");

    // If there is data in localstorage about user, then we're parsing it and returning it from this function call
    if (localUser) return JSON.parse(localUser);
    // If we don't find user's data in localstorage, then we're setting an empty array in localstorage's user and returning an empty array from this function call
    localStorage.setItem("user", JSON.stringify([]));
    return [];
};

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
    user: getInitialUser(),
    todoList: getInitialTodos(),
    filteredStatus: "all",
};

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        userLogin: (state, action) => {
            const userInfo = localStorage.getItem("user");
            if (userInfo) {
                localStorage.setItem("user", JSON.stringify([{ ...action.payload }]));
                state.user.push(action.payload);
            }
        },
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
            else localStorage.setItem("todoList", JSON.stringify([{ ...action.payload }]));
        },
        deleteTodo: (state, action) => {
            const todoList = localStorage.getItem("todoList");

            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo, index) => {
                    if (todo.id === action.payload) {
                        todoListArr.splice(index, 1);
                    }
                });
                localStorage.setItem("todoList", JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        updateTodo: (state, action) => {
            const todoList = localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.title = action.payload.title;
                        todo.priority = action.payload.priority;
                        todo.status = action.payload.status;
                        todo.time = action.payload.time;
                    }
                });
                localStorage.setItem("todoList", JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        updateFilterStatus: (state, action) => {
            state.filteredStatus = action.payload;
        },
    }
});

export const {
    userLogin,
    addTodo,
    deleteTodo,
    updateTodo,
    updateFilterStatus
} = todoSlice.actions;
export default todoSlice.reducer;