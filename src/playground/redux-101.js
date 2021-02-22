import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ setTo = 1 } = {}) => ({
    type: 'SET',
    setTo
})

const resetCount = () => ({
    type: 'RESET'
})

const reducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            const setTo = typeof action.setTo === 'number' ? action.setTo : 1
            return {
                count: setTo
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 10}))
store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(decrementCount({decrementBy: 10}))


store.dispatch(resetCount())
store.dispatch(setCount({setTo:101}))


