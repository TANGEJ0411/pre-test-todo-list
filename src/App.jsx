import Header from "./components/Header"
import { TodoContextProvider } from "./context/useTodoContext"
import TodoListContent from "./views/TodoListContent"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n/i18n"

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <TodoContextProvider>
        <Header />
        <TodoListContent />
      </TodoContextProvider>
    </I18nextProvider>
  )
}

export default App