import React from "react"

class Die extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            isSelected: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState(prevState => {
            if (prevState.isSelected) {
                e.target.classList.remove("selected")
                return {
                    isSelected: false
                }
            } else {
                e.target.classList.add("selected")
                return {
                    isSelected: true
                }
            }
        })
    }
    
    render() {
       return (
            <div className="die" onClick={this.handleClick}>
                <span>{this.props.int}</span>
            </div>
        ) 
    }
    
}

export default Die