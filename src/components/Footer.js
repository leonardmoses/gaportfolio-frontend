import { Link } from "react-router-dom"

function Footer(props) {
  //inline styles for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "80%",
    margin: "auto",
  }

    return (
      <header>
        <nav style={navStyle}>
        <a href="https://github.com/leonardmoses" target="#">gitHub</a>
        <a href="https://www.linkedin.com/in/leonard-moses/" target="#2">Linkedin</a>
        <a href="http://www.anemote.com/" target="#3">AnEmote</a>
        </nav>
      </header>
    )
  }
  
  export default Footer;