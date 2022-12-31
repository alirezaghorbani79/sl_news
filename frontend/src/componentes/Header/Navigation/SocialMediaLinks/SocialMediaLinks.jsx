import FacebookIcon from 'assets/icons/facebook_icon'
import InstagramIcon from 'assets/icons/instagram_icon'
import TwitterIcon from 'assets/icons/twitter_icon'
import Link from 'next/link'
import styles from './SocialMediaLinks.module.scss'

const SocialMediaLinks = () => {
  return (
    <div className={styles.iconsContainer}>
      <Link className={styles.button} href={'/'}>
        <InstagramIcon style={{ height: '20px', width: '20px' }} />
      </Link>
      <Link className={styles.button} href={'/'}>
        <FacebookIcon style={{ height: '21px', width: '21px' }} />
      </Link>
      <Link className={styles.button} href={'/'}>
        <TwitterIcon style={{ height: '16px', width: '20px' }} />
      </Link>
    </div>
  )
}

export default SocialMediaLinks
