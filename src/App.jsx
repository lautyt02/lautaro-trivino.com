import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home ,Contact,Cv,Projects, Admin} from './pages'
import { Layout } from './components'
function App() {

  return (
      <BrowserRouter>
    <Layout>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact/' element={<Contact/>}/>
        <Route path='/projects/' element={<Projects/>}/>
        <Route path='/cv/' element={<Cv/>}/>
        <Route path='/admin/' element={<Admin/>} />
      </Routes>
    </Layout>
      </BrowserRouter>
  )
}

export default App
