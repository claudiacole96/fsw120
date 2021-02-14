import React from "react";
class Tweets extends React.Component {
  render() {
    let tweetsArray = [];
    let tweets = this.props.data[0].myTweets.map(function (x) {
      return (
        <div key={x.id} id="returnDiv">
          <img src={x.url} alt="IMG N/A" id="returnImg"></img>
          <h2 id="author">{x.author}</h2>
          <span id="date">{x.date}</span>
          <h5 id="returnH5">{x.description}</h5>
        </div>
      );
    });
    tweetsArray.push(...tweets);
    let moretweets = this.props.data[1].friendsTweets.map(function (x) {
      return (
        <div key={x.id} id="returnDiv">
          <img src={x.url} alt="IMG N/A" id="returnImg"></img>
          <h2 id="author">{x.author}</h2>
          <span id="date">{x.date}</span>
          <h5 id="returnH5">{x.description}</h5>
        </div>
      );
    });
    tweetsArray.push(...moretweets);
    let sortedTweetsArray = tweetsArray.sort((a, b) => {
      let stringA = a.props.children[2].props.children
        .split("/");
      let stringB = b.props.children[2].props.children
        .split("/");
      let dateA = stringA[2] + stringA[0] + stringA[1];
      let dateB = stringB[2] + stringB[0] + stringB[1];
      return dateB - dateA;
    });
    return <div id="myPageTweets">{sortedTweetsArray}</div>;
  }
}
export default Tweets;