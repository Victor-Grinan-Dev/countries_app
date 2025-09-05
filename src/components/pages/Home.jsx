import { Link } from 'react-router-dom'
import image from '../../assets/images/bg1.jpg'

function Home() {
  return (
    <div className="homeBox" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , color:'white' }}>
      <h1 className="homeTitle" style={{fontSize:'90px'}}>Welcome to Countries App</h1>
      <p className="homeSubtitle" style={{fontSize:'40px'}}>Explore the world, one country at the time: <Link to='/browse' >Let's Go!</Link></p>  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p style={{fontSize:'30px'}}>Picture by: 

      <a href="https://www.pexels.com/@aaditya-arora-188236/" target="_blank" rel="noopener noreferrer">Aaditya Arora</a>
      </p>

    </div>
  )
}

export default Home
