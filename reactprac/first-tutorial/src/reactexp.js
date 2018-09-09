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
        //special property
        this.state = "Some value";
    }
    //lifecycle hooks //specially named methods

    //When DOM is created
    compareDidMount(){

    }
    //When DOM is deleted
    compareWillUnmount(){

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

//Example explantion
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      //bind will set the value of "this" no matter the contexts it was called
      //So in this case we bind the referance of "this" to our class object
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
          //Notice that from the DOM's prespective we are calling
          //"this" in a global scope and not from a object method or class
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );