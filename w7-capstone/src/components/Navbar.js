import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    const home = <FontAwesomeIcon icon={faHome} color="white" />;
    const feed = <FontAwesomeIcon icon={faListAlt} color="white" />;
    const myPage = <FontAwesomeIcon icon={faUser} color="white" />;
    return (
      <nav id="navbar">
        <Link to="/" style={{ padding: "25px", fontSize: "40px" }}>
          {home}
        </Link>
        <Link to="/Tweets" style={{ padding: "25px", fontSize: "40px" }}>
          {feed}
        </Link>
        <Link to="/MyPage" style={{ padding: "25px", fontSize: "40px" }}>
          {myPage}
        </Link>
      </nav>
    );
  }
}
export default Navbar;