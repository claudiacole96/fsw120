import React from "react"

function Badge (props) {
  return (
    <div id="badge">
      <h1>Badge</h1>
      <span id="firstAndLast">Name: {props.firstName} {props.lastName}</span>
      <span id="phone">Phone: {props.phone}</span>
      <span id="pob">Place of Birth: {props.pob}</span>
      <span id="favFood">Favorite Food: {props.favFood}</span>
      <span id="email">Email: {props.email}</span>
      <div id="description">
          <span>{props.description}</span>
      </div>
    </div>
  )
}

export default Badge;