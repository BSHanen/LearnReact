import React,{Component} from "react";
import Social from "./Social";

function Items(){
    return(
      <div class="text-start px-4">
         <h2  class="fw-bold" >Show Checkboxes</h2>

        < Social
         p={{  media : "Facebook" ,
               id : "facebook",
               img :  "https://picsum.photos/60" ,
         }}
         />
         < Social 
                p={{  media : "Instagrame" ,
                 id : "instagrame",
                  img : "https://picsum.photos/61",
                }}
                  />
         < Social 
                    p={{   media : "Youtube", 
                      id : "youtube", 
                      img : "https://picsum.photos/62",
                    }}
                      />
         
         
         <input  class="btn btn-success" type="submit" value="Submit"/>
      </div>
    );
  }

export default Items ;