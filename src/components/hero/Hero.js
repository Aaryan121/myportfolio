import "./Hero.css"
import HomeImg from '../homeimg/HomeImg'
import {AiFillGithub , AiFillLinkedin , AiFillInstagram} from "react-icons/ai"

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className="leftContainer">
        <div className="infoWrapper">
        <p className="small">Hello,</p>
        <p className="huge">I'M ARJUN</p>
        <p className="desc">
        Currently a student pursuing bachelors in Computer Science and Information Technology. I'm passionate about web development and programming in general. I like to learn new emerging technologies and showcase my skills.
        </p>

        <button className="btn">
          Download My CV
        </button>
        <div className="clinks">
          <AiFillGithub className="clink" />
          <AiFillLinkedin className="clink" />
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