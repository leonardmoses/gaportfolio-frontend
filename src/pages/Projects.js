import { useState, useEffect } from "react";
import "../projects.css";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);
  console.log(projects)
  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };
  
  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  
  const loaded = () => {
    return projects.map((project) => (
      <div className="eachProject">
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a className="gitButton" href={project.git} target="#">
          <button >Github</button>
        </a>
        <a className="liveButton" href={project.live} target="#2">
          <button >live site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;