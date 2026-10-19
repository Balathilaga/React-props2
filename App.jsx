import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'


function App() {


  return (
    <>
      {/* <ProfileCard name="Viswa" age={21} role="Fullstackdeveloper">
      <p>i want to became a developer</p>
      </ProfileCard>

      <ProfileCard name="Thilaga" age={21} role="Designer">
      <p>i want to became a Designer</p>
      </ProfileCard>
     
     <ProfileCard name="Bala" age={21} role="Data Science">
      <p>i want to became a Data Sceince</p>
      </ProfileCard> */}
      
     <div>
       <Card title="Product">
        <p>This is a best product</p>
        <button>Rs 999/</button>
      </Card> 

      <Card title="About">
        <p>We are learning React and building projects.</p>
        <button>Learn More</button>
      </Card>

      <Card title="Contact">
        <p>Email: example@gmail.com</p>
        <button>Contact us</button>
      </Card>
  
     </div>
  
        



    </>
  )
}

export default App
