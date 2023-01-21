import NewsCard from 'componentes/NewsCard'
import { useAllNews, useGetBookmarks } from 'hooks/useApi'
import ProfileLayout from 'layouts/ProfileLayout'

const Bookmark = () => {
  const { data } = useGetBookmarks()

  if (!data) return null
  console.log(data)

  const cards = data.map((el) => {
    return <NewsCard title={el.title} body={el.body} id={el.id} />
  })

  return (
    <ProfileLayout>
      <div>{cards}</div>
    </ProfileLayout>
  )
}
export default Bookmark
