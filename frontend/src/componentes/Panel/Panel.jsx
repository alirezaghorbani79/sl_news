import Link from 'next/link'
import styles from './Panel.module.scss'

const Panel = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.item}>
          <Link href={'/profile/myinfo'}>edit info</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/profile/changepass'}>change psssword</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/profile/addnews'}>add news</Link>
        </li>
        <li className={styles.item}>
          <Link href={'/profile/news'}>my news</Link>
        </li>
      </ul>
    </div>
  )
}

export default Panel
