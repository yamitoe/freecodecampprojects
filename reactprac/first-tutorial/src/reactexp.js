//Explanation on how things work in React //Practice

//This is JSX form, is also a react element
let x = <div>I'm a DOM element</div>;
//Key thing in React is reuseability

//This is a React component (One variation) //Components MUST be capitalized
function Person(props){
    //must return react element
    return(
        //Nameing scheme in react
        <section className>
            <div>Hi I am a person</div>
            <div>This allows me to chain child elements</div>
            <div>Only one root element is allowed in JSX(Exceptions apply)</div>
        </section>
    
    );
}
//React Component Ver 2
class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = "Some value"
    }

    render(){
          //must return react element
        return(
            //Nameing scheme in react
            <section className>
                <div>Hi I am a person</div>
                <div>This allows me to chain child elements</div>
                <div>Only one root element is allowed in JSX(Exceptions apply)</div>
            </section>
        
        );
    }
}

ReactDOM.render(
    //Custom tag, calls component Person //Note attributes for these are passed as one object
    <Person/>,
    document.getElementById("test")
)