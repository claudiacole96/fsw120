import React from "react"

function Footer() {
    return (
        <footer>
            <p style={{borderTop: "1px solid lightGray"}}></p>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h6 style={{fontStyle: "italic", fontSize: "8px", fontWeight: "normal", color: "gray"}}>Copyright @ Your Website 2019</h6>
            </div>
        </footer>
    )
}

export default Footer