import React, {Component} from "react";
import TeamMember from "./TeamMember";
import InfoMembers from "./InfoMembers";

class Team extends Component {
  
  constructor(){
    super()
    this.state = { 
                   info:InfoMembers
    }
   }
   // lebut du mapping c de generaliser le code en cas davoir plusiers MAPS
   // C'est une simple fct qui fait convertir une liste dinfo en une Map et la fait comme return
   mapping(x){
    const members = x.map(member => <TeamMember //member est un parametre qui represente chaque ligne dans la MAP
    // C le principe des boucles     
         key={member.id}
         img={member.img}
         name={member.name}
         position={member.position}
         phone={member.phone}
         mail={member.email}
         website={member.website}
                                 />);
           return members
           }

  render (){ 
    
    
    return(
        <div className="row">
         
       {this.mapping(this.state.info)}

       </div>
    );
}}
export default Team ;