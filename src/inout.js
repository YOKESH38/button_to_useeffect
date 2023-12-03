import { useState } from "react"

const Use=()=>{

    const[signin,setsigin]=useState(false);
       const[signout,setsignout]=useState(false);
   
       function handleClick(){
           setsigin(signin?false:true);
           setsignout(signout?false:true);
       }
       return(
           <div>
           
            <button onClick={handleClick}>{signin?"sign out":"sign in"}</button>
               <p>{signin?"you're welcome":"please signin"}</p>
           </div>
       )
   }
   
   export default Use;