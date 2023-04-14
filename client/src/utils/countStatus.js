export const countStatus = (status) => {
    const todoInfo = JSON.parse(localStorage.getItem("todoList"));

    const count = todoInfo?.reduce((count, task) => {
        if (task.status === status) {
            return count += 1;
        } else {
            return count;
        }
    }, 0);

    return count;
}