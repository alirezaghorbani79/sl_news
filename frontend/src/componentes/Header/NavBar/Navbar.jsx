import ProfileIcon from 'assets/icons/profile_icon'
import Link from 'next/link'
import styles from './NavBar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.home}>
          <h3>SLNews</h3>
        </Link>
        <div className={styles.box}>
          <Link href={'/profile'} className={styles.profileBtn}>
            <ProfileIcon className={styles.profileIcon}  />
            Profile
          </Link>

          <input className={styles.searchBox} placeholder='search' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
