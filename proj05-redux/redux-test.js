const Redux = require('redux');
const ReactRedux = require('react-redux');

const log = console.log;

log(Redux);

const initial_state = {counter:0, color:'#ababab'};

const reducer = (state,action={}) => {
   // action - протокол, произвольный вид
   // type
   // action
    let counter = state.counter;
    switch (action.type)
    {
        case 'PLUS': counter++; break;
        case 'MINUS': counter--; break;
        case 'RESET': counter=0; break;
        default: log('type mismatch!!')
    }
    return {...state, counter: counter};
}

const reducer2 = (state,action={}) => {
    // action - протокол, произвольный вид
    // type
    // action
    let counter = state.counter;
    switch (action.type)
    {
        case 'PLUS': counter +=2; break;
        case 'MINUS': counter -=2; break;
        case 'RESET': counter=0; break;
        default: log('type mismatch!!')
    }
    return {...state, counter: counter};
}



const store = Redux.createStore(reducer,initial_state);
log(store.getState());

store.dispatch({type: 'PLUS'});
store.dispatch({type: 'PLUS'});

log(store.getState());
store.replaceReducer(reducer2);
store.dispatch({type: 'MINUS'});

log(store.getState());

//---------------
const plus = (st=0,ac) => { return (ac.type === '+'? st+1: st ); }
const minus = (st=0,ac) => { return (ac.type === '-'? st-1: st ); }
const reset = (st=10,ac) => { return (ac.type === 'r'? 0: st ); }

const reducerCombined = Redux.combineReducers({p:plus, m:minus, r:reset});
const storeCombined = Redux.createStore(reducerCombined,{p:0,m:0,r:10});
log(storeCombined.getState());

storeCombined.dispatch({type:'-'});
storeCombined.dispatch({type:'+'});
storeCombined.dispatch({type:'r'})
log(storeCombined.getState());

//----------------


