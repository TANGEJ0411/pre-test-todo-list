const addTodo = (onSuccess, onFailure, onBefore, onFinal) => {
    onBefore && onBefore();
    return async () => {

        let success = false;

        await new Promise((reslove)=>{
            setTimeout(() => {
                success = true;
                reslove();
            }, 2000);
        });
        
        if (success){
            // api成功
            onSuccess && onSuccess();
        }else{
            // api失敗
            onFailure && onFailure();
        }
        onFinal && onFinal();
    };
};

const deleteTodo = (onSuccess, onFailure, onBefore, onFinal) => {
    onBefore && onBefore();
    return async () => {

        let success = false;

        await new Promise((reslove)=>{
            setTimeout(() => {
                success = true;
                reslove();
            }, 2000);
        });
        
        if (success){
            // api成功
            onSuccess && onSuccess();
        }else{
            // api失敗
            onFailure && onFailure();
        }
        onFinal && onFinal();
    };
};

export default {
    addTodo,
    deleteTodo
};