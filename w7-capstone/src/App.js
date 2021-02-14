import React from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Tweet from "./components/Tweet"

let data = [{
  "id": 0,
  "title": "@Ryan Reeves",
  "description": "I am Aquaman",
  "date": "August 24, 2020",
  "author" : "Jason Momoa"
},
{
  "id": 1,
  "title": "@Vladamir Tarasenko",
  "description": "I am Iron Man",
  "date": "September 11, 2020",
  "author" : "Tony Stark"
},
{
  "id": 2,
  "title": "@Ryan O'Reilly",
  "description": "Reach for the Sky!",
  "date": "September 23, 2020",
  "author" : "Woody"
},
{
  "id": 3,
  "title": "@Anonymous",
  "description": "To Infinity...and Beyond!",
  "date": "December 1st, 2020",
  "author" : "Buzz Lightyear"
}]

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      "newTweet":"",
      "date":"",
      "author":"",
      "target":"" 
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayTweets = this.displayTweets.bind(this)
    this.addTweet = this.addTweet.bind(this)
    this.updateTweet = this.updateTweet.bind(this)
   
  }
  
  displayTweets = (arr) => {
    return arr.map((x) =>{
      return (
        <Tweet 
          id={x.id} 
          title={x.title} 
          author={x.author} 
          date={x.date} 
          description={x.description}  
          update = {this.updateTweet}/>
      )})
  }

  addTweet = (e) => {
    e.preventDefault()
    let x = {
      "id": Math.floor(Math.random() * 100),
      "title": this.state.target,
      "author": this.state.author,
      "date": this.state.date,
      "description": this.state.newTweet      
    }
    data.push(x)
    console.log(data)
    this.setState ({
      "newTweet": "",
      "date": "",
      "author":"",
      "target":"",
      "id": ""
    })
  }

  handleClick (e) {
    e.preventDefault()
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  updateTweet (id, updatedTweet) {
    const updatedTweets = data.map(tweet => {
      if(tweet.id === id){
        data[id].description = updatedTweet        
      } return tweet      
    })
    data = updatedTweets
    this.setState ({
      "newTweet": "",
      "date": "",
      "author":"",
      "target":""
    })
    console.log(data)
  }

  render (){
    
      
      
    
    return (
      <div className="App">
        <Navbar />
        <form onSubmit={this.addTweet}>
          <label>New Tweet</label>
            <div>
              <input 
                type='text' 
                placeholder='@'
                onChange = {this.handleChange}
                name = "target">
              </input>
            </div>
            <div>
              <textarea 
                type='textarea' 
                placeholder='New Tweet'
                onChange = {this.handleChange}
                name = "newTweet">
              </textarea>
            </div>
            <div>
              <input
                type='date'
                placeholder='Date'
                onChange = {this.handleChange}
                name = "date">
              </input>  
            </div>
            <div> 
              <input
                type='text'
                placeholder='Author'
                onChange = {this.handleChange}
                name = "author">
              </input>
            </div>
            <div>
              <button>Submit</button>   
            </div>
                
        </form>
        <div id="tweets">
          <h1>Welcome to Twitty Tweeter</h1>
          <h3>Where friends come together and tweet the twitty!</h3>
          {this.displayTweets(data)}
          
        </div>
        <Footer id="footer"/>
      </div>
    )
  } 
}

export default App;