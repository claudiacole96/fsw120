import React from "react"

function Post(props) {
    return (
        <div>
            <h2 style={{fontWeight: "bold", margin: "0"}}>{props.title}</h2>
            <h3 style={{fontWeight: "normal", margin: "0"}}>{props.subTitle}</h3>
            <h5 style={{fontWeight: "normal", fontStyle: "italic", margin: "0", color: "gray"}}>Posted by <b>{props.author}</b> on {props.date}</h5>
            <p style={{borderBottom: "1px solid lightGray"}}></p>
        </div>
    )
}

export default Post