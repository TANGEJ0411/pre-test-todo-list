import Header from "./components/Header"
import { TodoContextProvider } from "./context/useTodoContext"
import TodoListContent from "./views/TodoListContent"

function App() {

  return (
    <TodoContextProvider>
      <Header />
      <TodoListContent />
    </TodoContextProvider>
  )
}

export default App