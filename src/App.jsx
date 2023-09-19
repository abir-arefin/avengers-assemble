import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards/Cards'
import Info from './Components/Info/Info'



function App() {
  const [info, setInfo] = useState([]);

  const addProfile = card => {
    const profileInfo = [card];
    setInfo(profileInfo);
  }
  

  return (
    <>
     
      <div className='flex justify-between px-24'>
        <Cards addProfile={addProfile}></Cards>
        <Info info={info}></Info>

      </div>
      
    </>
  )
}

export default App
