import React , {Component} from "react";


class File extends Component{
    /*methode (name2){
        return <h4>{name2}</h4>
    }*/
   constructor(){
    super()
    this.state = {answer : 'yes'}
   }
    render(){
        //const name = 'Sarra'
        //const name2 = this.methode('Hanen')
        //<h1> {this.props.name} {this.props.name2}</h1> name est passe dans App 
        return(
            <div>
               
               <h1> Do You Love Me {this.state.answer}</h1>
            </div>
        )
    }
}
export default File;