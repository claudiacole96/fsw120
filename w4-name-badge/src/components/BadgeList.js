import React from "react"
import Badge from "./Badge"

class BadgeList extends React.Component {
  
  render (){
    const cards = this.props.nameBadges.map( (x, i) =>{
      return (        
          <Badge 
            key={i}
            firstName={x.firstName}
            lastName={x.lastName}
            phone={x.phone}
            email={x.email}
            favFood={x.favFood}
            description={x.description}
            pob={x.pob}
          />
      )
    }) 
      return (
        <div>{cards}</div>        
      )   
  }
}

export default BadgeList;