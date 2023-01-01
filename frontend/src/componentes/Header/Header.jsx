import Navigation from './Navigation'
import styles from './Header.module.scss'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
      <Navigation />
      <div className={styles.head}>
        <div className={styles.logo}>
          <h1>SLNews</h1>
        </div>
        <h4>Daily News Updates</h4>
      </div>
      <NavBar />
    </>
  )
}

export default Header
