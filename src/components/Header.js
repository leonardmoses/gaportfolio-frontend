import { Link } from "react-router-dom"

function Header(props) {
  //inline styles for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid darkblue",
    borderRadius: "20px",
    padding: "8px",
    width: "90%",
    margin: "auto",
    aDecoration: "none",
  }

    return (
      <header>
        <h1>LEONARD MOSES</h1>
        <nav style={navStyle}>
        <Link to="/">
          <div>ABOUT</div>
        </Link>
        {/* 
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        */}

        <Link to="/resume">
        <div>RESUMÉ</div>
        </Link>

        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        </nav>
      </header>
    )
  }
  
  export default Header;