import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import PageTransition from './components/PageTransition'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Routes from './Routes'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background-main dark:bg-background-dark transition-colors duration-300">
          <Navbar />
          <PageTransition>
            <main className="container mx-auto px-4 py-8">
              <Routes />
            </main>
          </PageTransition>
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
