const { createStore } = Redux;

const initState = {
    todos: [],
    posts: []
}

function myreducer(state = initState, action){
    if (action.type == 'ADD_TODO'){
        return {
            ...state,
            todos : [...state.todos, action.todo]
        }
    }
    if (action.type == 'ADD_POST'){
        return {
            ...state,
            posts : [...state.posts, action.post]
        }
    }
}

const store = createStore(myreducer); 

// normally we do in component in react
// but we dont have component here 
// so we will do normal subscription and log to the console
// when the changes happen to store than this function will run
store.subscribe( () => {
    console.log('state updated');
    console.log(store.getState());
} );

const todoAction = {type: 'ADD_TODO', todo: 'buy milk'}
const todoAction = {type: 'ADD_TODO', todo: 'sleep some more'}
const todoAction = {type: 'ADD_POST', post: 'Egg hunt with yoshi'}

store.dispatch(todoAction);