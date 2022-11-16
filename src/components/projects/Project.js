import React from 'react'
import blog from "../../assets/img/blog.png"

const Project = (props) => {
  return (
    <div className="Cardcontainer">
  <div className="card">
    <div className="cardHeader">
      <img src={require(`../../assets/img/${props.img}.png`)} alt="rover" />
    </div>
    <div className="cardBody">
      <span className="tag tagTeal">{props.tags}</span>
      <h4>
        {props.title}
      </h4>
      <p>
        {props.desc}
      </p>
      <a href={props.link} target={"_blank"}>Website Link</a>
    </div>
  </div>
  </div>
  )
}

export default Project