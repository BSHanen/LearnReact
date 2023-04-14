import React, { Component } from "react";

class App extends Component {
    constructor(){
        super();
        this.state = { number : 0}
        // pour chaque elements utiliser entre constructor et render il faut le declarer 
        // dans le consctuctor de cette maniere 
        this.OnClickEventIncrement = this.OnClickEventIncrement.bind(this);
        this.OnClickEventDesincrement = this.OnClickEventDesincrement.bind(this);
    }
    OnClickEventIncrement(){
       this.setState(prevState => { // setState fonction predefinie dans la classe Components 
        // qui prends et  modifier la valeur du state declarer dans le Constructor directement et de facon gnrl
        // a l'aide de son parametre 'prevState' (Privious State)
        return { number : prevState.number + 1 } // entre {} car c du JS
       })
    }
    
    OnClickEventDesincrement(){
        this.setState(prevState => {
             return { number : prevState.number - 1 }
            })
    }
    render(){

        return(
            <div className="container ">
                <h1>{ this.state.number}</h1>
    
            <button  className = " rounded p-3 mb-2 bg-success text-white"
             onClick={this.OnClickEventIncrement}>Click Me to increment ! </button>

            <button  className = " rounded p-3 mb-2 bg-success text-white"
             onClick={this.OnClickEventDesincrement}>Click Me to desincrement ! </button>
            </div>
        )
    }
}
export default App ;