import { useAuth } from 'contexts/AuthContext'
import Link from 'next/link'
import styles from './Panel.module.scss'

const fields = {
  admin: [
    {
      title: 'edit info',
      link: '/profile/',
    },
    {
      title: 'change psssword',
      link: '/profile/changepassword',
    },
    {
      title: 'add news',
      link: '/profile/addnews',
    },
    {
      title: 'my news',
      link: '/profile/news',
    },
  ],
  user: [
    {
      title: 'edit info',
      link: '/profile/myinfo',
    },
    {
      title: 'change psssword',
      link: '/profile/changepassword',
    },
    {
      title: 'favorite class',
      link: '/profile/favclass',
    },
    {
      title: 'saved news',
      link: '/profile/bookmark',
    },
  ],
}

const Panel = () => {

  const { isAdmin } = useAuth()
  const options = isAdmin ? fields['admin'] : fields['user']

  const links = options.map((el) => {
    return (
      <li className={styles.item}>
        <Link href={el.link}>{el.title}</Link>
      </li>
    )
  })

  return (
    <div className={styles.container}>
      <ul>
        {links}
      </ul>
    </div>
  )
}

export default Panel
