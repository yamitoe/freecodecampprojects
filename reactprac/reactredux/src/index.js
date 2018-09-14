import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'; //quick of React.Component


//start all in one, then refractor into smaller files
//App will be a buttons that display a number
//Write as a normal react code then add redux later

//React component
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0,hamburger:"hamburger",value:0};
        //bind 
        this.addCounter = this.addCounter.bind(this);
        this.minusCounter = this.minusCounter.bind(this);
        this.addByAmount = this.addByAmount.bind(this);
        this.myChange= this.myChange.bind(this);
    }

  

    addCounter(){
        this.setState(state=>({count: state.count + 1}));
    }

    addByAmount(event){
        let x = parseInt(this.state.value,10);
        this.setState(state=>({count: state.count + x}));
        event.preventDefault();
    }

    minusCounter(){
        this.setState(state=>({count: state.count - 1}));
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

ReactDOM.render(
    <Counter/>,
    document.getElementById("root")
)




