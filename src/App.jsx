import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home ,Contact,Cv,Projects} from './pages'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact/' element={<Contact/>}/>
        <Route path='/projects/' element={<Projects/>}/>
        <Route path='/cv/' element={<Cv/>}/>
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
