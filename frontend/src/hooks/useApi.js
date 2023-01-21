import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import {
  addBookmark,
  createNews,
  deleteNews,
  getAllNews,
  getBookmarks,
  getOneNews,
  updateFavoriteClasses,
} from 'utils/api/api'


const useAllNews = () => {
  return useQuery(['news'], getAllNews)
}

const useOneNews = (id) => {
  return useQuery(['news', id], () => getOneNews(id))
}

const useCreateNews = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation({
    mutationFn: createNews,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['news'])
      router.push('/profile/news')
    },
  })
}

const useDeleteNews = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation({
    mutationFn: deleteNews,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['news'])
      router.push('/profile/news')
    },
  })
}

const useAddBookmark = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation({
    mutationFn: addBookmark,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['bookmark'])
      // router.push('/profile/bookmark')
    },
  })
}

const useGetBookmarks = () => {
  return useQuery(['bookmark'], getBookmarks)
}

const useUpdateFavorite = () => {
  return useMutation({
    mutationFn: updateFavoriteClasses,
    onSuccess: (data) => {
      console.log(data)
    },
  })
}
export {
  useAllNews,
  useCreateNews,
  useAddBookmark,
  useGetBookmarks,
  useUpdateFavorite,
  useOneNews,
  useDeleteNews,
}
