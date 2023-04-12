import React,{Component} from "react";

class Titel extends Component{
  render(){
    const client = "Designer";
    const titel={ Designer : "Design" ,
                  Programmer : "Programming"
                }
    
    const info = { name : 'Sarra',
                   nick : 'Hanen'
                  }
    return(
      
        <h1 class="navbar rounded fw-bolder bg-dark">
          Hello {`${info.name} ${info.nick} `}
          {client === "Designer" ? titel.Designer : titel.Programmer } is my Life !! </h1>
    );
  }
}
export default Titel ;