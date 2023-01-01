import BookmarkIcon from 'assets/icons/bookmark_icon'
import Image from 'next/image'
import styles from './NewsCard.module.scss'
import dummyImg from '../../assets/images/dummy.png'

const NewsCard = () => {
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
      <h3 className={styles.title}>Title The standard Lorem Ipsum passage</h3>
      <div className={styles.newsBody}>
        <div className={styles.text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut
        </div>
        <Image src={dummyImg} />
      </div>
    </div>
  )
}

export default NewsCard
