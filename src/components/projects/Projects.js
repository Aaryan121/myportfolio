import "./Projects.css"
import Project from './Project'

const Projects = () => {
  return (
    <div className='projectsContainer' id="projects">
        <div className="title">My Projects</div>
        <div className="projectWrapper">
            <Project 
            img="blog"  
            title="Bloggy" 
            tags="MERN" 
            desc="Bloggy is a blog web app developed in MERN stack. It contains user login and register logic where user can write and post blogs." 
            link="https://courageous-moonbeam-8a6d47.netlify.app/"
            />

            <Project 
            img="poke"  
            title="Pokedex" 
            tags="React , Redux Toolkit" 
            desc="It is a pokemon info web app containing all important info about the pokemons. I have used Redux Tollkit to manage the state and async actions." 
            link="https://master--regal-pika-332812.netlify.app/"
            />

            <Project 
            img="api"  
            title="Blog And College Note Api" 
            tags="Node Express MongoDb" 
            desc="It is an api made using Node and Express, possible to handel CRUD operation for blog, notes and important news and subjects. Basically its a College Class management Api." 
            link="https://github.com/Aaryan121/gt_backend"
            />
        </div>
    </div>
  )
}

export default Projects