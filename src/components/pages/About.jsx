import React from 'react';
const aboutStyle = {
  color:"white",
  paddingLeft:"20px"
}
function About() {
  return (
    <div className='page' style={aboutStyle}>
      <h1>About Countries-App</h1>

      <p>Countries App is an Application for React Advance course of HBC. Is meant to be a compilation of skillis learned during the React22K course.</p>
      <br />
      <h3>Technologies used:</h3>
      <p>- React</p> 
      <p>- Redux</p> 
      <p>- Axios</p> 
      <p>- Github</p> 
      <p>- Bootstrap</p> 
      <br />
      <h2>Data from:</h2>
      <p>- openweathermap</p> 
      <p>- countries rest</p> 
      <p>- Axios</p> 
      <p>- Github</p> 
      <p>- Bootstrap</p> 

      <br />
      <h3>Installation:</h3>
      <p>- create a profile in open weather api https://openweathermap.org/api</p>
      <p>- create a key of your own.</p>
      <p>- change the key in the .env file for your own</p>
      <p>- clone the repo</p>
      <p>- cd into it</p>
      <p>- npm i</p>
      <p>- npm start</p>

      <br />
      <h3>Check it OnLine:</h3>
      <p>- https://victor-grinan-dev.github.io/countries_app1/</p>

    </div>
  )
}

export default About;