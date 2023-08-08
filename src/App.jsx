import { Route, Routes } from 'react-router-dom'
import ListOfUsers from './pages/listOfUsers'
import HomePage from './pages/home'

function App() {

  return (
    <Routes>
      <Route path='/users/:page' element={<ListOfUsers />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App