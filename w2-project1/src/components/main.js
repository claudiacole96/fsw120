import React from "react"

import Post from "./posts"
import blogPosts from "./blogPosts"

function Main() {
  const blogPostComponents = blogPosts.map(
    x => <Post key={x.key} title={x.title} subTitle={x.subTitle} author={x.author} date={x.date}/>
  )
  return (
    <div style={{width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "50px"}}>
      {blogPostComponents}
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <button style={{fontWeight: "bold", padding: "10px", fontSize:"10px", color: "white", backgroundColor: "teal"}}>OLDER POSTS --{">"}</button>
      </div>
    </div>
  )
}

export default Main