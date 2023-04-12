import React, { Component } from "react";

function TeamMember (props){
  
   
      return(
        <div className="col-md-4 col-sm-6 ">
            
         <div className="card">
              <div className="card-header">
                <img style={{maxWidth : '100%'}}src={props.info.img} alt=''/>
              </div>
              <div className="card-body"
              style={{backgroundColor : props.info.website ? 'white' : 'black'  }}>
            
                 <h2>{props.info.name}</h2>
                 <h5>{props.info.position}</h5>
                 <div>{props.info.phone}</div>
                 <div>{props.info.email  ? props.info.email  : 'Pas de compte mail'}</div>
                 <div>{props.info.website  }</div>
              </div>
         </div>
         
        </div>
    );
}

export default TeamMember  ;