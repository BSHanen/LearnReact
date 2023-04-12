import React, { Component } from "react";
import Titel from "./Titel";
import Content from "./Content";
import Items from "./Items";
import Profil from "./Profil";

class App extends Component{
    render(){
        return(
            <div class="container text-start py-2 ">
               
                <Content/>
                
               
            </div>
        );
    }
}
export default App ;