import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Logout from './Authorization/components/Logout'
import Login from './Authorization/components/Login'



function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/logout' Component={Logout}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
  )
}

export default App
