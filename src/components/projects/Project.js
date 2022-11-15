import React from 'react'
import blog from "../../assets/img/blog.png"

const Project = () => {
  return (
    <div class="Cardcontainer">
  <div class="card">
    <div class="card-header">
      <img src={blog} alt="rover" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">MERN</span>
      <h4>
        Bloggy
      </h4>
      <p>
        Bloggy is a blog web app developed in MERN stack. It contains user login and register logic where user can write and post blogs.
      </p>
      <a href="https://courageous-moonbeam-8a6d47.netlify.app/" target={"_blank"}>Website Link</a>
    </div>
  </div>
  </div>
  )
}

export default Project