import "./AboutMe.css"
import Aboutimg from "../../assets/img/about.png"

const AboutMe = () => {
  return (
    <div className="aboutC" id="about">
        <div className="title">About Me</div>
        <div className="aboutwarper">
            <div className="leftabout">
                <img src={Aboutimg} alt="" />
            </div>
            <div className="rightabout">
                <p className="aboutdesc">
                Currently a Student pursuing BSc CSIT on ASCOL, I usually like to learn about new things in pogramming world, web development in general. 
                I have done several courses on React Js and few projects also based on MERN stack. 
                I can learn things quickly, and have experience to adapt with new teams quicker. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe