import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
