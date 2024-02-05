import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Content from './Content'

function App() {

  return (
    <div className="App">
      <h1>React-router-V6</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/content" element={ <Content /> } />
      </Routes>
    </div>
  )
}

export default App
