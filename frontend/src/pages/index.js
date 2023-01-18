import NewsCard from 'componentes/NewsCard'
import RootLayout from 'layouts/RootLayout'
import { useEffect, useState } from 'react'
import { getAllNews } from 'utils/api/api'

export default function Home({ data }) {
  // const { data } = getAllNews()
  // console.log(data)

  // if (!data) {
  //   return null
  // }

  const cards = data.map((el) => {
    return <NewsCard title={el.title} body={el.body} />
  })

  return (
    <RootLayout>
      {cards}
      {/* <NewsCard />
      test test test test test test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br /> */}
    </RootLayout>
  )
}

export async function getServerSideProps(ctx) {
  const { data } = await getAllNews()
  console.log(data)

  return {
    props: {
      data,
    },
  }
}
