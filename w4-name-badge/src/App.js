import React from 'react'
import './App.css';
import BadgeList from './components/BadgeList'

class App extends React.Component {
  constructor (){
    super()
    this.state = ({
      firstName: "",
      lastName: "",
      pob: "",
      favFood: "",
      phone: "",
      email: "",
      description: "",
      nameBadges: [],
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    
    handleSubmit(e){
      e.preventDefault()
      let input = document.getElementById("numbersOnly");
      let numbers = /^[0-9]+$/;
      if (input.value.match(numbers)) {
        let newUserData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        pob: this.state.pob,
        favFood: this.state.favFood,
        phone: this.state.phone,
        email: this.state.email,
        description: this.state.description
        }
        this.setState({
        nameBadges : [newUserData, ...this.state.nameBadges],
                      firstName: "",
                      lastName: "",
                      pob: "",
                      favFood: "",
                      phone: "",
                      email: "",
                      description: ""
        })
      } else {
        alert(`Please only use numeric characters for phone number`);
      }
    } 
    
    render (){
      return (
        <div>
          <form onSubmit={this.handleSubmit} id="form">
              <input 
                minlength="3"  
                onChange={this.handleChange} 
                name="firstName" 
                placeholder="First Name"
                value={this.state.firstName}
                required={true}
                class="firstName"
              />
              <input   
                minlength="3"
                onChange={this.handleChange} 
                name="lastName" 
                placeholder="Last Name"
                value={this.state.lastName}
                required={true}
                class="lastName"
              />
              <input  
                minlength="3"
                onChange={this.handleChange} 
                name="pob" 
                class="pob"
                placeholder="Place of Birth"
                value={this.state.pob}
                required={true}
              />
              <input    
                minlength="3"
                onChange={this.handleChange} 
                name="favFood" 
                placeholder="Favorite Food"
                value={this.state.favFood}
                required={true}
                class="favFood"
              />
              <input  
                id="numbersOnly"
                minlength="3"
                class="phone" 
                onChange={this.handleChange} 
                name="phone" 
                placeholder="Phone"
                value={this.state.phone}
                required={true}
              />
              <input  
                minlength="3"
                class="email" 
                onChange={this.handleChange} 
                name="email" 
                placeholder="Email"
                value={this.state.email}
                required={true}
              />
              <textarea 
                minlength="3"
                placeholder="Tell us about yourself" 
                class="desc" 
                onChange={this.handleChange} 
                name="description"
                value={this.state.description}
                required={true}
              />
            <div class="subLoc"><button class="sub">Submit</button></div>
          </form>
          <BadgeList nameBadges={this.state.nameBadges}/>
        </div>
      )
    }
      
}

export default App;