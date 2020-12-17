const { createStore } = Redux;

const initState = {
    todos: [],
    posts: []
}

function myreducer(state = initState, action){
    console.log(action, state);
}

const store = createStore(myreducer);

// action is just a javascript object
// and it has a type property which describe the action
// and it has optional load of data
const todoAction = {
    type: 'ADD_TODO',
    todo: 'buy milk'    // optional we can give any name to this.
}

// when we dispatch the action 
// it means we are passing to the reducer
store.dispatch(todoAction);