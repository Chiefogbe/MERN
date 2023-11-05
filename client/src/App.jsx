import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Home from './Home'
import Buuk from './Buuk'
import SingleBook from './singleBook'
import './App.css'
const App = () => {
  return (
    <div> 
       <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Header' element={<Header/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/Buuk' element={<Buuk/>}/>
          <Route path='/Buuk/:slug' element={<SingleBook/>}/>
        </Routes>
        <Footer/>
       </Router>
    </div>
  )
}

export default App
