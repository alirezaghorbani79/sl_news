import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addBookmark,
  createNews,
  deleteNews,
  getAllNews,
  getBookmarks,
  getOneNews,
  updateFavoriteClasses,
} from 'utils/api/api'

// const queryClient = useQueryClient()

const useAllNews = () => {
  return useQuery(['news'], getAllNews)
}

const useOneNews = (id) => {
  return useQuery(['news', id], () => getOneNews(id))
}

const useCreateNews = () => {
  return useMutation({
    mutationFn: createNews,
    onSuccess: (data) => {
      console.log(data)
    },
  })
}

const useDeleteNews = () => {
  return useMutation({
    mutationFn: deleteNews,
    onSuccess: (data) => {
      console.log(data)
    },
  })
}

const useAddBookmark = () => {
  return useMutation({
    mutationFn: addBookmark,
    onSuccess: (data) => {
      console.log(data)
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
