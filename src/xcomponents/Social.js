import React,{Component} from "react";

function Social(props){
    return(
        <ul>
         <li>
            <img src = {props.p.img} alt={`icon of ${props.p.media}`}/>
         <input class="form-check-input color=#198754 " 
         type="checkbox" id={props.p.id} value="Facebook" />
          <label htmlFor={props.p.id} class="px-2">{props.p.media}</label><br/>
        </li>
        </ul>
    );}

export default Social ;
