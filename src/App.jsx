import { Link, Route, Routes } from 'react-router-dom'
import ListOfUsers from './pages/listOfUsers'
import HomePage from './pages/home'

function App() {

  return (
    <Routes>
      <Route path='/users/:page' element={<ListOfUsers />} />
      <Route path='/' element={<HomePage />} />

      <Route path='*' element={
        <main>
          <h2>NOT FOUND!!!</h2>
          <Link to='/'> Inicio </Link>
        </main>
      } />
    </Routes>
  )
}

export default App