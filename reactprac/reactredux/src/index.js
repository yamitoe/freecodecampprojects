import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter'

import { createStore } from 'redux'
import counter from './reducers'

//start all in one, then refractor into smaller files
//App will be a buttons that display a number
//Write as a normal react code then add redux later

// Steps for redux
//Goal is to not have a this.state in react so that its all centralized 
// in redux
//===============================
//Make action creator

//Make reducer 
//Anything that directly changed the state should now be a reducer
//Add,Minus, Add by number


//Reducer pretty much the starting point of the data 
//which is then stored in store

//action - add or minus
//reducer - if increase add else decrase
//state - store all that info

const store = createStore(counter);

ReactDOM.render(
    <Counter
    //pass all as object but orginal code needs a function so we sending anon function
    //dispatch calls store whcih call reducer
        addCounter={()=>store.dispatch({type: "ADD"})}
        minusCounter={()=>store.dispatch({type: "MINUS"})}
    />,
    document.getElementById("root")
)




