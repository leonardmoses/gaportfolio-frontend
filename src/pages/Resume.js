import { useState, useEffect } from "react";
import resumePNG from "../images/Moses_Resume.png";
import resumePDF from "../images/Moses_Resume.pdf";
import "../resume.css";



const Resume = () => {
  return (
    <div className="resumeMain">
      <div className="resumePDF">
        <a href={resumePDF} download>
          <button>Download Resumé</button>
        </a>
        <a href={resumePDF} download>
          <img src={resumePNG} alt="" />
        </a>
      </div>
    </div>

  )

};
    

 
export default Resume;