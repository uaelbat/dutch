import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import { Header } from './components/Header'

function App() {

  return (
    <div className="App h-screen grid grid-rows-10">
      <div className='my-auto row-span-1'>
        <Header children='飲み会割り勘アプリ'></Header>
      </div>
      <div className='row-span-9'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/content" element={ <Content /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
