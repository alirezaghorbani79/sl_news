import BookmarkIcon from 'assets/icons/bookmark_icon'
import DeleteIcon from 'assets/icons/delete_Icon'
import { useAuth } from 'contexts/AuthContext'
import { useAddBookmark } from 'hooks/useApi'
import RootLayout from 'layouts/RootLayout'
import { getOneNews } from 'utils/api/api'

import styles from '../../styles/news.module.scss'

const SingleNews = ({ data }) => {
  const { isLoggedIn, isAdmin } = useAuth()

  const { mutate } = useAddBookmark()

  const bookmarkHandle = () => {
    mutate(data.id)
  }

  return (
    <RootLayout>
      <div className={styles.card}>
        <div className={styles.infoBox}>
          <div className={styles.details}>
            <div>Today</div>
            <div>{data.viewCount}</div>
          </div>
          <div>
            {isLoggedIn ? (
              <BookmarkIcon
                className={styles.bookmarkIcon}
                onClick={bookmarkHandle}
              />
            ) : null}
            {isAdmin ? <DeleteIcon className={styles.bookmarkIcon} /> : null}
          </div>
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.newsBody}>
          <div className={styles.text}>{data.body}</div>
        </div>
      </div>
    </RootLayout>
  )
}

export default SingleNews

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const { data } = await getOneNews(id)

  return {
    props: {
      data,
    },
  }
}
