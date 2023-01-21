import ProfileIcon from 'assets/icons/profile_icon'
import Link from 'next/link'
import { useAuth } from 'contexts/AuthContext'
import styles from './NavBar.module.scss'
import DeleteIcon from 'assets/icons/delete_Icon'

const Navbar = () => {

  const { name, isLoggedIn } = useAuth()

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.home}>
          <h3>SLNews</h3>
        </Link>
        <div className={styles.box}>
          <Link href={isLoggedIn ? '/profile': '/login'} className={styles.profileBtn}>
            <ProfileIcon className={styles.profileIcon} />
            {name ? name : 'Register'}
          </Link>
          <input className={styles.searchBox} placeholder="search" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
