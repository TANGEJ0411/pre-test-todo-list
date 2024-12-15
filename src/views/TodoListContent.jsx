import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm";
import { useTodoContext } from "../context/useTodoContext";

function TodoListContent() {

    const {translate, todoList} = useTodoContext();

  return (
    <div className="h-calc-container p-3 mt-[52.8px]">
        <div className="h-calc-custom bg-white rounded-lg p-3 flex flex-col justify-between">
            <div className="overflow-auto">
                <div className="mb-2">{translate('PROGRESS')} {todoList.filter(todo => todo.isComplete).length}/{todoList.length}</div>
                {
                    todoList.map((todo) => <TodoItem key={todo.id} id={todo.id} content={todo.content} isComplete={todo.isComplete} />)
                }
            </div>
            <TodoForm />
        </div>
    </div>
  )
}

export default TodoListContent