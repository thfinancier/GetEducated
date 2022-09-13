import styles from './style'
import { Navbar, Books, Footer } from './components'

const App = () => (
    <div className="bg-primary w-full">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Books />
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