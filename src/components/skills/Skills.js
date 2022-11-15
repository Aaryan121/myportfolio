import Indicator from "../indicator/Indicator"
import "./Skills.css"


const Skills = () => {
  return (
    <div className="skillContainer">
        <div className="title">
            My Skills
        </div>
        <div className="skillsWarper">
            <Indicator level="4" skill="HTML" />
            <Indicator level="3" skill="CSS" />
            <Indicator level="3" skill="JavaScript" />
            <Indicator level="3" skill="React" />
            <Indicator level="3" skill="NodeJs" />
            <Indicator level="2" skill="MongoDB" />
            <Indicator level="2" skill="MySQL" />
        </div>
        <div className="expl">
          <ul>
            <li>Integrating apis to frontend applications.</li>
            <li>Develop interactive User Interfaces for your web applications.</li>
            <li>Using modern technologies for building applications.</li>
            <li>Developing UI/UX as per the need.</li>
          </ul>
        </div>
    </div>
  )
}

export default Skills