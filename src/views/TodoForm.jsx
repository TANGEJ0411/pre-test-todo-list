import Icon from "@mdi/react"
import InputComponent from "../components/InputComponent"
import { COLOR, ICON_SIZE } from "../utils/type"
import { mdiPlusCircleOutline } from "@mdi/js"
import { useCallback, useState } from "react"
import { createTodo } from "../utils/util"
import { useTodoContext } from "../context/useTodoContext"
import mockApi from "../services/mockApi"

function TodoForm() {

    const {translate ,setTodoList, runPageLoading, stopPageLoading} = useTodoContext();

    // 使用 useState 定義要輸入的事項
    const [todo, setTodo] = useState("");

        // 使用 useCallback 定義 submitTodo 函數，call 模擬 API 並成功時新增 todo 到todoList
        const submitTodo = useCallback((e, todo) => {
    
            // 阻止表單預設行為
            e.preventDefault();

            // 如果 todo 為空，則不執行
            if (!todo) {
                alert("請輸入事項");
                return
            };
    
            // 模擬 API 成功時執行的函數
            const onApiSuccess = () => {
                const newTodo = createTodo(todo);
                setTodoList((prev) => [...prev, newTodo]);
                setTodo("");
            };
    
            // 模擬 API 失敗時執行的函數
            const onApiFail = () => {
                alert("新增失敗");
            };
    
            // 執行模擬 API
            mockApi.addTodo(onApiSuccess, onApiFail, runPageLoading, stopPageLoading)();
        }, [runPageLoading, setTodoList, stopPageLoading]);

  return (
    <form onSubmit={(e) => {
            submitTodo(e, todo);
        }} 
        className="flex items-center">
        <InputComponent.TextInput placeholder={translate("TODO_PLACEHOLDER")} onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
        <button role="submit"><Icon path={mdiPlusCircleOutline} size={ICON_SIZE.LARGE} color={COLOR.PRIMARY} /></button>
    </form>
  )
}

export default TodoForm