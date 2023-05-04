import React, { Component } from "react";
import Header from "./Header";
import Team from "./Team";

class App extends Component {
   render(){
    return (
        <div  class="container text-start py-2 ">
            <Header />
            <Team/>
        </div>

          );
   
}
}

export default App ;