import { Routes, Route } from 'react-router-dom';


import Logout from './Authorization/components/Logout'
import Login from './Authorization/components/Login'
import Home from './Home/Home'



function App() {


  return (
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/logout' Component={Logout}/>
      <Route path='/login' Component={Login}/>
    </Routes>
  )
}

export default App
