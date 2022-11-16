import "./Hero.css"
import HomeImg from '../homeimg/HomeImg'
import {AiFillGithub , AiFillLinkedin , AiFillInstagram} from "react-icons/ai"

const Hero = () => {

  const onButtonClick = () => {
    fetch('CV.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
  }


  return (
    <div className='heroContainer' id="home">
      <div className="leftContainer">
        <div className="infoWrapper">
        <p className="small">Hello,</p>
        <p className="huge">I'M ARJUN</p>
        <p className="desc">
        Currently a student pursuing bachelors in Computer Science and Information Technology. I'm passionate about web development and programming in general. I like to learn new emerging technologies and showcase my skills.
        </p>

        <button onClick={onButtonClick} className="btn">
          Download My CV
        </button>
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