import NewsCard from 'componentes/NewsCard'
import ProfileLayout from 'layouts/ProfileLayout'
import { useRouter } from 'next/router'
import React from 'react'
import { getAllNews } from 'utils/api/api'

const news = ({ data }) => {
  const { pathname } = useRouter()
  //profile/news

  const cards = data.map((el) => {
    return <NewsCard title={el.title} body={el.body} id={el.id} key={el.id} delPerm={pathname === '/profile/news' ? true : false} />
  })

  return (
    <ProfileLayout>
      <div>{cards}</div>
    </ProfileLayout>
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

export default news
