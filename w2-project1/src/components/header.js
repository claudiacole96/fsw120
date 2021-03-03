import React from "react"

const styleA = {
    color: "white",
    padding: "10px",
    textDecoration: "none",
    fontSize: "8px"
}

function Header() {
    return (
        <header style={{backgroundColor: "gray", color: "white", height: "300px"}}>
            <nav style={{display: "flex", justifyContent: "space-around", alignItems: "center", height: "50px"}}>
                <h4 style={{margin: "0"}}>Start Bootstrap</h4>
                <div>
                    <a style={styleA} href="./public/index.html">HOME</a>
                    <a style={styleA} href="./public/index.html">ABOUT</a>
                    <a style={styleA} href="./public/index.html">SAMPLE POST</a>
                    <a style={styleA} href="./public/index.html">CONTACT</a>  
                </div>
            </nav>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "200px"}}>
                <div>
                    <h1 style={{margin: "0", fontSize: "55px"}}>Clean Blog</h1>
                    <h2 style={{margin: "0", fontSize: "16px", fontWeight: "normal", textAlign: "center", color: "lightgray"}}>A Blog Theme by Start Bootstrap</h2>
                </div>
            </div>
        </header>
    )
}

export default Header