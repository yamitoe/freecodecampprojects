import React from 'react';
import ReactDOM from 'react-dom';

import {Counter} from './components/Counter';
import { createStore } from 'redux';
import {counter} from './reducers/counter';



const store = createStore(counter);

const render = ()=>ReactDOM.render(
    <Counter
    //pass all as object but orginal code needs a function so we sending anon function
    //dispatch calls store whcih call reducer
    //Call the add by value one in the compoents instead?
        counter={store.getState()} //the current counter
        addCounter={()=>store.dispatch({type: "ADD"})}
        minusCounter={()=>store.dispatch({type: "MINUS"})}
    />,
    document.getElementById("root")
)
render();
//so it will actaully update
store.subscribe(render);




