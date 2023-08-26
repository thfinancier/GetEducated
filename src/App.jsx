import styles from './style'
import { Navbar, Books, BookModal, Footer } from './components'
import { Routes, Route } from 'react-router'

const App = () => (
    <div className="bg-primary w-full">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Books />} />
          </Routes>
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
)

export default App