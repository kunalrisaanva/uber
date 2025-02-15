
import './App.css'
import Home from "./pages/Home"
import { Routes , Route} from "react-router-dom"
import  UserLogin from './pages/UserLogin'
import  UserSinghup  from './pages/UserSinghup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSinghup/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>}/>
      <Route path='/captain-signup' element={<CaptainSignup/>}/>
     </Routes>


    </>
  )
}

export default App
