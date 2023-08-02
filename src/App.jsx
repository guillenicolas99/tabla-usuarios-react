import { Route } from 'wouter'
import ListOfUsers from './components/listOfUsers'
import HomePage from './pages/home'

function App() {

  return (
    <>
      <Route component={ListOfUsers} path='/users/:page' />
      <Route component={HomePage} path='/' />
    </>
  )
}

export default App