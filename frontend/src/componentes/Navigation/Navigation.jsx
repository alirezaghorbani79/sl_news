import LanguageSwitchs from './LanguageSwitchs'
import styles from './Navigation.module.scss'
import SocialMediaLinks from './SocialMediaLinks'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <LanguageSwitchs />
        <SocialMediaLinks />
      </div>
    </nav>
  )
}

export default Navigation
