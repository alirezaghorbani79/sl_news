import LanguageSwitchs from './LanguageSwitchs'
import styles from './Navigation.module.scss'
import SocialMediaLinks from './SocialMediaLinks'

const Navigation = (props) => {
  return (
    <nav
      className={
        !props.fixed
          ? styles.navigation
          : [styles.navigation, styles.fixed].join(' ')
      }
    >
      <div className={styles.container}>
        <LanguageSwitchs />
        <SocialMediaLinks />
      </div>
    </nav>
  )
}

export default Navigation
