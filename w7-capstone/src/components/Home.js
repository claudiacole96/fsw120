import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
    };
  }
  render() {
    return (
      <div id="formGrid">
        <img id="twitterHome" src="https://media.sproutsocial.com/uploads/2015/11/search-twitter-history.svg"></img>
        <div id="formBox">
            <form id="loginForm">
                <input type="email" id="email" placeholder="Email" required></input>
                <input
                    type="text"
                    id="password"
                    placeholder="Password"
                    required
                ></input>
                <button id="logIn" onClick={this.props.logIn}>
                    Log In
                </button>
            </form> 
        </div>
        
      </div>
    );
  }
}
export default Home;