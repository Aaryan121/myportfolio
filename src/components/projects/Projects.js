import "./Projects.css"
import Project from './Project'

const Projects = () => {
  return (
    <div className='projectsContainer'>
        <div className="title">My Projects</div>
        <div className="projectWrapper">
            <Project />
        </div>
    </div>
  )
}

export default Projects