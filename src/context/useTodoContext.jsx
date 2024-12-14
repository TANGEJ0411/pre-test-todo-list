import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import usePageLoading from "../hooks/usePageLoading";

const TodoContext = createContext(null);

export const TodoContextProvider = ({children}) => {

        // 引入多語系hook
        const { t: translate } = useTranslation();

        // 引入 usePageLoading Hook 控制是否開啟載入畫面
        const {
            runPageLoading,
            stopPageLoading
        } = usePageLoading(false);

    const [todoList, setTodoList] = useState([]);

    const value = {
        todoList,
        setTodoList,
        translate,
        runPageLoading,
        stopPageLoading
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
};

TodoContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useTodoContext = () => useContext(TodoContext);