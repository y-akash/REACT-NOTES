const { createStore } = Redux;

const initState = {
    todos: [],
    posts: []
}

function myreducer(state = initState, action){
    if (action.type == 'ADD_TODO'){
        // here we have to return a new object
        // this object represent new state of the store
        return {
            todos : [...state.todos, action.todo]
        }
    }
}

const store = createStore(myreducer); 

const todoAction = {
    type: 'ADD_TODO',
    todo: 'buy milk'
}

store.dispatch(todoAction);