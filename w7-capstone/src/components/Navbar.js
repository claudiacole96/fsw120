import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'




function Navbar () {
  return (
    <div id="nav">
      <h1>Twitty Tweeter</h1>
      <span id="icons">
        <img src="https://image.flaticon.com/icons/png/512/23/23681.png" alt="twitter logo" style = {{height: "40px", width: "40px"}}></img>
        <FontAwesomeIcon className = "icon" icon = {faHome} style = {{height: "40px", width: "40px"}}/>
        <FontAwesomeIcon className = "icon" icon = {faBell} style = {{height: "40px", width: "40px"}}/>
        <FontAwesomeIcon className = "icon" icon = {faUsers} style = {{height: "40px", width: "40px"}}/>
        <FontAwesomeIcon className = "icon" icon = {faLocationArrow} style = {{height: "40px", width: "40px"}}/>
      </span>  
      
    </div>
  )
}

export default Navbar