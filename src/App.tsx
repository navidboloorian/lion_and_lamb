import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './common/Layout'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/work"} element={<Work />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
