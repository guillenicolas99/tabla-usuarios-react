import { Route } from 'wouter'
import ListOfUsers from './pages/listOfUsers'
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