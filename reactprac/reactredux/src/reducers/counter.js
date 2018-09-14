//For this.state.count //Covers add and minus
export let counter = (state = 5,action)=>{
    switch(action.type){
        case "ADD":
            return state +1
        case "MINUS":
            return state -1
        default:
            return state;
    }
}