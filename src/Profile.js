import React from 'react'

function Profile(props) {
 
  return (
  
    <div>
        {props.fullname} {props.bio} {props.profession}
       <img src={props.children}></img> 
       <button onClick={()=>props.fct(props.fullname)}>click me</button>
      
    </div>
  )
}

export default Profile
