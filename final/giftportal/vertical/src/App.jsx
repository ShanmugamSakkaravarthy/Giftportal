import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VerticalCarousel from './assets/vertical'
import Adminspages from './component/adminspg'
import Logins from './component/loginpages'
import Sucess from './component/success'
import UserDashboardComponent from './component/userdash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserDashboardComponent/>
    </>
  )
}

export default App
