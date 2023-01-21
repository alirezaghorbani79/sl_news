import NewsCard from 'componentes/NewsCard'
import { useAuth } from 'contexts/AuthContext'
import RootLayout from 'layouts/RootLayout'
import { useState } from 'react'
import { getAllNews } from 'utils/api/api'
import styles from '../styles/main.module.scss'

export default function Home({ data }) {
  const { isLoggedIn, favoriteClasses } = useAuth()
  const [order, setOrder] = useState('viewCount')
  
  let newData = data
  if (isLoggedIn) {
    favoriteClasses.forEach((el) => {
      newData = data.filter((item) => item.class !== el)
      console.log(newData)
    })
  }
  
  
  newData = newData.sort((a, b) => new Date(b[order]) - new Date(a[order]))
  console.log(favoriteClasses)

  const changeOrderHandler = (e) => {
    setOrder(e.target.value)
  }



  const cards = newData.map((el) => {
    return (
      <NewsCard
        title={el.title}
        body={el.body}
        id={el.id}
        viewCount={el.viewCount}
      />
    )
  })

  return (
    <RootLayout>
      <div className={styles.body}>
        <div>{cards}</div>
        <div>
          <div className={styles.filterBox}>
            <div className={styles.input}>
              <label>
                Sort by:
                <select id="sort" name="sort" onChange={changeOrderHandler}>
                  <option value="viewCount">View Count</option>
                  <option value="createdAt">Date</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export async function getServerSideProps(ctx) {
  const { data } = await getAllNews()

  return {
    props: {
      data,
    },
  }
}
