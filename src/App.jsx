import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home ,Contact,Cv,Projects, Admin} from './pages'
import { Layout } from './components'
function App() {

  return (
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact/' element={<Contact/>}/>
        <Route path='/projects/' element={<Projects/>}/>
        <Route path='/cv/' element={<Cv/>}/>
        <Route path='/admin/' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
    </Layout>
  )
}

export default App
