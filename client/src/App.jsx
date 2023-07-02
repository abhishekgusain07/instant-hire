import Home from './pages/Home'
import Signup from './pages/signup'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
