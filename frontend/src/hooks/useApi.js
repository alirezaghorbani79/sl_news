import { useQuery } from '@tanstack/react-query'
import { getAllNews } from 'utils/api/api'

const useAllNews = () => {
  return useQuery({ queryKey: ['news'], queryFn: getAllNews })
}

export { useAllNews }
