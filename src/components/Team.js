import React, { Component } from "react";
import TeamMember from "./TeamMember";
import Info from "./Info";

class Team extends Component {
    constructor(){
        super();
        this.state = { Info:Info }
    }
    

         mapping(x){
            const Members = x.map(member =>  <TeamMember 
           
                key={member.id}
                img={member.img}
                name={member.name}
                position={member.position}
                phone={member.phone}
                email={member.email}
               website={member.website}/>
            );
        return Members }
    render(){
        
        return(
            <div className="row">
                { this.mapping(this.state.Info)} 
            </div>
        );
    }
}

export default Team ; 