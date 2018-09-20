import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {Navbar} from './components/navbar';
import "./stylesheets/index.css"

class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            jsonData : []
        };
    }

    navbarfunc(){
        //placeholder data //reminder that 'body'.json() is one of the methods
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response =>response.json())
        .then(json=>{
            let arr = [];
            for(let x = 0; x < 5;x++){
                //console.log(json[x].title);
                arr.push(<Navbar img={json[x].url} desc={json[x].title}
                key={x} className="small-icon"/>);
            }
            this.setState({jsonData: arr});
            return;   
        })
        return this.state.jsonData;   
    }

    render(){
        return(
            <div>
                <header>
                    <section className="nav-bar">
                        <nav className="flex-container">{this.navbarfunc()}</nav>
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

