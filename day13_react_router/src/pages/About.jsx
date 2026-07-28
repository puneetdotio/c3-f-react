import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
    let navigate = useNavigate();

  return (
      <div>
          <h1>This is about page</h1>
          <button onClick={() => navigate("/about/nested")}>Nested ko dikhao</button>
    </div>
  )
}

export default About