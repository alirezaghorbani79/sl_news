import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './LanguagesSwitchs.module.scss'

const LanguagesSwitchs = () => {
  const { asPath } = useRouter()

  return (
    <div>
      <Link className={styles.button} href={asPath} locale={'fa'}>
        FA
      </Link>
      |
      <Link className={styles.button} href={asPath} locale={'en'}>
        EN
      </Link>
    </div>
  )
}

export default LanguagesSwitchs
