import { Link, Route } from 'wouter'
import ListOfUsers from './components/listOfUsers'

function App() {

  return (
    <>
      <h1 className='title'>App de Usuarios</h1>


      <Link className='links-btn' to='/users/1'> Ver Usuarios</Link>
      <Route component={ListOfUsers} path='/users/:page' />

    </>
  )
}

export default App