import React from 'react'

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "isEditing": false,
      "newTweet": this.props.description
    }
    this.del = this.del.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  del = (e) => {
    if (e.target) {
      let x = e.target
      let y = x.parentNode
      let tweets = document.getElementById("tweets")
      tweets.removeChild(y)
    }
  }

  toggleForm = () => {
    this.setState({
      "isEditing": !this.state.isEditing
    })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    this.props.update(this.props.id, this.state.newTweet)
    this.toggleForm()
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    if (!this.state.isEditing) {
      return (
        <div key={this.props.id} id="tweet">
          <h1>{this.props.title}</h1>
          <h2>{this.props.description}</h2>
          <h4>By: <span>{this.props.author}</span></h4>
          <h4>Date: <span>{this.props.date}</span> </h4>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.del}>Delete</button>
        </div>
      )
    } else {
      return (
        <div key={this.props.id} id="tweet">
          <h1>{this.props.title}</h1>
          <form onSubmit = {this.handleUpdate}>
            <input 
              type="text"
              value={this.state.newTweet}
              name="newTweet"
              onChange = {this.handleChange}
            >
            </input>
            <button>Save</button>
          </form>
          <h4>By: <span>{this.props.author}</span></h4>
          <h4>Date: <span>{this.props.date}</span> </h4>
          
        </div>
      )
    }
  }
}
export default Tweet