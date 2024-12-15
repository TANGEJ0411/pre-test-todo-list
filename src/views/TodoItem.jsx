import { mdiCheckboxBlankOutline, mdiCheckboxOutline, mdiTrashCanOutline } from "@mdi/js"
import Icon from "@mdi/react"
import { COLOR, ICON_SIZE } from "../utils/type"
import PropTypes from 'prop-types';
import { useCallback } from "react";
import { useTodoContext } from "../context/useTodoContext";
import mockApi from "../services/mockApi";

function TodoItem({id, content, isComplete}) {

        const {setTodoList, runPageLoading, stopPageLoading} = useTodoContext();

        // 使用 useCallback 定義 deleteTodo 函數，call 模擬 API 並成功時刪除 todoList 中的 todo
        const deleteTodo = useCallback((id) => {
            // 模擬 API 成功時執行的函數
            const onApiSuccess = () => {
                setTodoList((prev) => prev.filter((todo) => todo.id !== id));
            };
    
            // 模擬 API 失敗時執行的函數
            const onApiFail = () => {
                alert("刪除失敗");
            };
    
            // 執行模擬 API
            mockApi.deleteTodo(onApiSuccess, onApiFail, runPageLoading, stopPageLoading)();
        },[runPageLoading, setTodoList, stopPageLoading])

        // 使用 useCallback 定義 toggleComplete 函數，切換 todoList 中的 todo 的 isComplete 狀態
        const toggleComplete = useCallback((id) => {
            setTodoList((prev) => prev.map((todo) => {
                if (todo.id === id){
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    };
                }
                return todo;
            }));
        },[setTodoList])

  return (
    <div className={`border p-3 flex justify-between items-center rounded-lg mb-2 ${isComplete ? 'border-success' : 'border-gray-200'} hover:bg-secondary`}>
        <div className="flex">
            <button onClick={()=>{toggleComplete(id)}}><Icon path={isComplete ? mdiCheckboxOutline : mdiCheckboxBlankOutline} size={ICON_SIZE.MEDIUM} color={isComplete ? COLOR.SUCCESS : ""}/></button>
            <p className={`ms-3 ${isComplete ? 'text-success' : ''} text-pretty`}>{content}</p>
        </div>
        <button onClick={()=>{deleteTodo(id)}}><Icon path={mdiTrashCanOutline} size={ICON_SIZE.MEDIUM} color={COLOR.DANGER}/></button>
    </div>
  )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
};

export default TodoItem;