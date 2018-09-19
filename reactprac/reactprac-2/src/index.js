import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {NavBar} from './components/navbar';

class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {hi:1};
    }

    navbarfunc(){
        let arr = [];
        //placeholder data //reminder that 'body'.json() is one of the methods
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response =>response.json())
        .then(json=>{
           // console.log(json);
            for(let x = 0; x < 2;x++){
                console.log(json[x].title);
                arr.push(<NavBar img={json[x].url} desc={json[x].title}
                key={x}/>);
            }
        })
        console.log(arr);
        return arr;
        
    }

    render(){
        return(
            <div>
                <header>
                    <section className="nav-bar">
                        <nav>{this.navbarfunc()}</nav>
                    </section>
                </header>
                <main>
                    <section className="nav-image-container"></section>
                </main>
               <footer>
                    <section className="nav-bar"></section>
               </footer>
                
            </div>
        );
    } 
}

ReactDOM.render(
    <IndexPage/>,
    document.getElementById("root")
);

