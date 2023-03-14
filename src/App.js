import { Routes, Route } from 'react-router-dom'
import Resume from './components/Resume'

function App() {
  return <Routes>
      <Route path='/' element={ <></> }/>
      <Route path='/resume' element={ <Resume/> }/>
  </Routes>
}

export default App;
