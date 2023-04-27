import React from "react";
import TeamMember from "./TeamMember";

function Team(){
    
        const Info = [
            {id:1 ,  img :  "https://picsum.photos/200" ,name : 'Sarra',position : 'web designe',phone : '+21359113887',email : 'sarra@gmail.com',website : 'sarra.com',},
            {id:2 ,  img :  "https://picsum.photos/201" ,name : 'Nihel',position : 'web dev',phone : '+21359113887',email : 'NihelDev@gmail.com',},
            {id:3 ,  img :  "https://picsum.photos/203" , name : 'Hanen',position : 'Graphic designe',phone : '+21359113887',email : 'Hanen@gmail.com',website : 'HanenGraphics.com',},
            {id:4 ,img :  "https://picsum.photos/204" ,name : 'Yousra',position : 'App dev',phone : '+21359113887',email : 'Yousra@gmail.com',website : 'Yousra.com',},
            {id:5 ,img :  "https://picsum.photos/205" , name : 'Rachad',position : 'Comptable',phone : '+21359113887',},
            {id:6 ,  img :  "https://picsum.photos/206" , name : 'Mouad',position : 'Administrator',phone : '+21359113887',email : 'Mouad.Admin@gmail.com',website : 'AdminMouad.com',}
        ]
        const Members = Info.map(member =>  <TeamMember 
           
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            mail={member.email}
           website={member.website}/>
        );

        return(
            <div className="row">
                { Members } 
            </div>
        );
    }

export default Team ; 