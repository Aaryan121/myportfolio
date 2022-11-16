import "./Hero.css"
import HomeImg from '../homeimg/HomeImg'
import {AiFillGithub , AiFillLinkedin , AiFillInstagram} from "react-icons/ai"
import CV from "./CV.pdf"

const Hero = () => {



  return (
    <div className='heroContainer' id="home">
      <div className="leftContainer">
        <div className="infoWrapper">
        <p className="small">Hello,</p>
        <p className="huge">I'M ARJUN</p>
        <p className="desc">
        Currently a student pursuing bachelors in Computer Science and Information Technology. I'm passionate about web development and programming in general. I like to learn new emerging technologies and showcase my skills.
        </p>

        <div  className="btn">
          <a href={CV} target={"_blank"} rel="noopener noreferrer"> 
          Download My CV</a>
        </div>
        <div className="clinks">
          <a target={"_blank"} rel="noopener noreferrer" href="https://github.com/Aaryan121">
          <AiFillGithub className="clink" />
          </a>
          <a target={"_blank"} rel="noopener noreferrer" href="https://www.linkedin.com/in/arjun-paudel-4234ab252/">
          <AiFillLinkedin className="clink" />
          </a>
          
          <AiFillInstagram className="clink" />

        </div>
        </div>
      </div>
      <div className="rightContainer">
        <HomeImg />
      </div>
    </div>
  )
}

export default Hero