import React from "react";


function TeamMember(props){

    return(
        
            <div className="col-md-4 col-sm-6 ">
            <div className="card">
                 <div className="card-header">
                      < img style={{maxWidth : '100%'}} src={props.img} alt=''/>
                 </div>

                 <div className="card-body"
                 style={{backgroundColor : props.website ? 'white' : 'black'}}>
                    <h2>{props.name}</h2>
                    <h5>{props.position}</h5>
                    <div>{props.phone}</div>
                    <div>{props.email ? props.email : <span  style={{backgroundColor :'red'}}> pas de compt mail </span>}</div>
                    <div>{props.website  }</div>
                 </div>
            </div>

        </div>
        
    )
}


export default TeamMember;