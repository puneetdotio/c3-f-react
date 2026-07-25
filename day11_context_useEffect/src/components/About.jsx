import React from 'react'

const About = () => {
    console.log("About rendering...")

    setTimeout(() => {
			console.log("hey i am about about page");
		}, 1000);

  return (
    <div>About</div>
  )
}

export default About