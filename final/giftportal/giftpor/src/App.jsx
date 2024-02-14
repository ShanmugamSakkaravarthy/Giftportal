import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom'
import Login from './pages/LoginPage'
import HomePage from './pages/Home'
import Dash from './pages/About'
import User from './pages/User'
import Mainpage from './pages/Mainpage'
import Order from './pages/Order'
import Rose from './pages/Rose'
import Cake from './pages/Cake'
import Candy from './pages/Chocolate'
import Gift from './pages/Gift'
import Ring from './pages/Ring'
import Gold from './pages/Gold'
import Confirm from './pages/Confirm'
import Payment from './pages/Myorder'
import AdminLogin from './pages/Admin'
import Adminspages from './pages/adminspages'
import Removegift from './pages/removegifts'
import Sucess from './pages/succes'
import Userpages from './pages/userdash'
import SucessS from './pages/successsigin'
import SucessL from './pages/successlogin'
import Logina from './pages/adminlogin'
import SignInForm1 from './pages/adsignin'
import SignUpForm1 from './pages/adsingup'
import Sucessad from './pages/adlsu'
function App() {
  return (
    <>
     <Router>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<Dash/>}/>
                <Route path='/user'  element={<User/>}/>
                <Route path='/mainpage'  element={<Mainpage/>}/>
                <Route path='/teddy'  element={<Order/>}/>
                <Route path='/candy'  element={<Candy/>}/>
                <Route path='/candy'  element={<Candy/>}/>
                <Route path='/rose'  element={<Rose/>}/>
                <Route path='/cake'  element={<Cake/>}/>
                <Route path='/candy'  element={<Candy/>}/>
                <Route path='/ring'  element={<Ring/>}/>
                <Route path='/admin'  element={<Adminspages/>}/>
                <Route path='/remove'  element={<Removegift/>}/>
              
                <Route path='/gift'  element={<Gift/>}/>
                <Route path='/gold'  element={<Gold/>}/>
                <Route path='/tommorrow'  element={<Confirm/>}/>
                <Route path='/today'  element={<Confirm/>}/>
                <Route path='/next week'  element={<Confirm/>}/>
                <Route path='/2 days later'  element={<Confirm/>}/>
                <Route path='/pay'  element={<Payment/>}/>
                <Route path='/success'  element={<Sucess/>}/>
                <Route path='/userdash'  element={<Userpages/>}/>
                <Route path='/usersss'  element={<SucessS/>}/>
                <Route path='/userll'  element={<SucessL/>}/>
                <Route path='/adlp'  element={<Logina/>}/>
                <Route path='/adsi'  element={<SignInForm1/>}/>
                <Route path='/adsu'  element={<SignUpForm1/>}/>
                <Route path='/adlsu'  element={<Sucessad/>}/>
            </Routes>
      </Router>
    </>
  )
}

export default App


































































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
