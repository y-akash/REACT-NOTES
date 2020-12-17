const { createStore } = Redux;

const initState = {
    todos: [],
    posts: []
}

// reducer is just a function which interact with store
// it takes 2 parameter, state and action
// when we create store that time it fire the reducer than it will find that we dont have state yet
// therfore we use initial state as default value for the state for first time to avoid errors.
function myreducer(state = initState, action){
    // interacting part comes here
}


// store is tightly coupled with reducer
// so we have to pass the reducer as a parameter
// so that they are link together
// and store will know that which reducer is gonna interacting with it.
const store = createStore(myreducer);