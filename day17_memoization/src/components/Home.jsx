import React from 'react'

const Home = ({users}) => {
    console.log("home rendering...")
  return (
    <div>Home</div>
  )
}

export default React.memo(Home);