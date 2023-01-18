import BookmarkIcon from 'assets/icons/bookmark_icon'
import Image from 'next/image'
import styles from './NewsCard.module.scss'
import dummyImg from '../../assets/images/dummy.png'

const NewsCard = ({title, body}) => {
  return (
    <div className={styles.card}>
      <div className={styles.infoBox}>
        <div className={styles.details}>
          <div>Today</div>
          <div>4786</div>
          <div>1748392</div>
        </div>
        <BookmarkIcon className={styles.bookmarkIcon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.newsBody}>
        <div className={styles.text}>
          {body}
        </div>
        <Image src={dummyImg} />
      </div>
    </div>
  )
}

export default NewsCard
