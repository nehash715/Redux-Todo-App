export const AddTodoAction=(todo)=>(dispatch,getState)=>{
const {
    Todo:{todos},
}=getState();

const hasTodo=todos.find(i=>i.todo===todo);

if(!hasTodo && todo!==''){
    dispatch({
        type:"ADD_TODO",
        payload:[{id:todo,todo},...todos]
    })
}

}

export const RemoveTodoAction=(todo)=>(dispatch,getState)=>{
    const {
        Todo:{todos},

    }=getState();

    dispatch({
        type:"REMOVE_TODO",
        payload:todos.filter(t=>t.id!==todo.id)
    })
}


export const EditTodoAction=(updatedTodo,todo)=>(dispatch,getState)=>{
    const {
        Todo:{todos},

    }=getState();

 let index=   todos.findIndex((todo) => todo.id === updatedTodo.id);
console.log("todos",todos, "updated=",updatedTodo,"indexofedit=",index)
    //if(index!==-1){
        const newTodos=[...todos];
        newTodos[index].todo=todo
    console.log(newTodos)

    dispatch({
        type:"EDIT_TODO",
        payload:newTodos
    })
//}
}
