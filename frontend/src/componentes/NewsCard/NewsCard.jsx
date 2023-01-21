import BookmarkIcon from 'assets/icons/bookmark_icon'
import Image from 'next/image'
import styles from './NewsCard.module.scss'
import dummyImg from '../../assets/images/dummy.png'
import { useAuth } from 'contexts/AuthContext'
import { useAddBookmark, useDeleteNews } from 'hooks/useApi'
import DeleteIcon from 'assets/icons/delete_Icon'
import Link from 'next/link'
import EditIcon from 'assets/icons/edit_icon'

const NewsCard = ({ title, body, id, viewCount, delPerm }) => {
  const { isLoggedIn, isAdmin } = useAuth()

  const { mutate } = useAddBookmark()
  const mutation = useDeleteNews()
  const bookmarkHandle = () => {
    mutate(id)
  }

  const deleteHandle = () => {
    mutation.mutate(id)
  }

  return (
    <div className={styles.card}>
      <div className={styles.infoBox}>
        <div className={styles.details}>
          <div>Today</div>
          <div>{viewCount}</div>
        </div>
        <div>
          {isLoggedIn ? (
            <BookmarkIcon
              className={styles.bookmarkIcon}
              onClick={bookmarkHandle}
            />
          ) : null}
          {delPerm ? (
            <DeleteIcon
              className={styles.bookmarkIcon}
              onClick={deleteHandle}
            />
          ) : null}
          {isLoggedIn && isAdmin && delPerm ? <EditIcon className={styles.bookmarkIcon} /> : null}
        </div>
      </div>
      <Link href={`/news/${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <div className={styles.newsBody}>
        <div className={styles.text}>{body}</div>
        {/* <Image src={dummyImg} /> */}
      </div>
    </div>
  )
}

export default NewsCard
