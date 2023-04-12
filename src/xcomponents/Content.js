import React,{Component} from "react";

class Content extends Component{
  render(){
    const client = "programmer";
    
                            
    return(
      
        <p class="text-start px-3"  >
       <span style={{color : client ==='designer' ? 'red': 'black' }}> Graphic </span> and <span style={{color : client ==='programmer' ? 'red': 'black' }}>Web</span> development dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    );
  }
}
export default Content ;