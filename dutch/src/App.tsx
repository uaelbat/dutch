import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
            <Header/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/content" element={ <Content /> } />
      </Routes>
    </div>
  )
}

export default App
