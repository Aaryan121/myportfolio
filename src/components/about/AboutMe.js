import "./AboutMe.css"
import Aboutimg from "../../assets/img/about.png"

const AboutMe = () => {
  return (
    <div className="aboutC">
        <div className="title">About Me</div>
        <div className="aboutwarper">
            <div className="leftabout">
                <img src={Aboutimg} alt="" />
            </div>
            <div className="rightabout">
                <p className="aboutdesc">
                Currently a student pursuing bachelors in Computer Science and Information Technology. I'm passionate about web development and programming in general. I like to learn new emerging technologies and showcase my skills.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe