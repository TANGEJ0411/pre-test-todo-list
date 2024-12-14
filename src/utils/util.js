export const createTodo = (todo) => {
    return {
        id: Date.now(),
        content: todo,
        isComplete: false
    };
};