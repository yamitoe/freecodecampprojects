import React from 'react';
import { Component } from 'react'; //quick of React.Component

//React component
 export class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0,hamburger:"hamburger",value:0};
        //bind 
      //  this.addCounter = this.addCounter.bind(this);
       // this.minusCounter = this.minusCounter.bind(this);
        this.addByAmount = this.addByAmount.bind(this);
        this.myChange= this.myChange.bind(this);
    }

  


    addByAmount(event){
        let x = parseInt(this.state.value,10);
        this.setState(state=>({count: state.count + x}));
        event.preventDefault();
    }

 

    myChange(e){
        this.setState({value: e.target.value});
    }



    render(){
        return(
            <div>
                <div>
                    The counter is at: {this.state.count}
                    <div>Also this says "{this.state.hamburger}"</div>
                </div>

                <button onClick={this.addCounter}>Add</button>
                <button onClick={this.minusCounter}>Minus</button>

                <form onSubmit={this.addByAmount}>
                    <label>Add an number to increment by</label>
                    <div>
                        <input value={this.state.value} onChange={this.myChange} ></input>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            
        );
    }
}