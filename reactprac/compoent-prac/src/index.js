//Practice React Components
import React from 'react'; 
import ReactDOM from 'react-dom';

class WindowArt extends React.Component{
    constructor(props){
        super(props);

        //Example of when not to bind

        //Theres absoultely no point binding these as
        //if we are just going to call the function
        //there is no time where we get to call it globally or well at all
        //Its not even an event is what you should be noticeing
        this.blueWall = this.blueWall.bind(this);
        this.greenWall = this.greenWall.bind(this);
    }

    blueWall(){
        return "blue";
    }

    greenWall(){
        return "green";
    }

    render(){
        return(
            <div>
                <span>AAAs{this.blueWall()}</span>
            </div>
        );

    }
}

ReactDOM.render(
    <WindowArt/>,
    document.getElementById('root')
);