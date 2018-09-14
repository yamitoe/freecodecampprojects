//Explanation on how things work in React //Practice

//This is JSX form, is also a react element
let x = <div>I'm a DOM element</div>;
//Key thing in React is reuseability

//This is a React component (One variation) //Components MUST be capitalized
function Person(props){
    //must return react element
    return(
        //Nameing scheme in react (camalcase)
        <section className>
            <div>Hi I am a person and 5+5= {5+5}</div>
            <div>This allows me to chain child elements</div>
            <div>Only one root element is allowed in JSX(Exceptions apply)</div>
        </section>
        //curly braces are the equivalent of template literal 
    
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

//Example #1 explantion
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

          //Bascailly the reason this is happing in this scenrio is that
          //We do not immediatly invoke the onclick, but we do so when clicked
        //==================================
          //Reason why that would call global in javascript

          //For example: 
          //Let x = t.someFunc;       (Stored the function)
          //x(); --//Look its called globally  (Called the function later)
          //Making the context of "this" refer to the global value instead of the current objects

          //To be more specefic notice that it calls .method and not .method()
          //So it calls .method then calls .method() makeing it global
          
          //Its just that the way we called the method would make the call global
          


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