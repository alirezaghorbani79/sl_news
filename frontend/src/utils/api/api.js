import { requestToBodyStream } from 'next/dist/server/body-streams'
import axios from './axios'

const login = async (user, password) => {
  const res = await axios.post('/api/user/login', {
    email: user,
    password: password,
  })

  return res
}

const signUp = async (name, email, password) => {
  const res = await axios.post('/api/user/signup', {
    name,
    email,
    password,
  })

  return res
}

const getAllNews = async () => {
  const res = await axios.get('/api/news')

  return res
}

const getOneNews = async (id) => {
  const res = await axios.get(`/api/news/${id}`)

  console.log(res)
  return res
}

const createNews = async (newsData) => {
  const res = await axios.post('/api/news', newsData)

  console.log(res)
  return res
}

const deleteNews = async (id) => {
  console.log(id)
  const res = await axios.delete(`/api/news/${id}`)

  console.log(res)
  return res
}

const addBookmark = async (id) => {
  const res = await axios.post('/api/user/bookmarks', { id })

  console.log(res)
  return res
}

const getBookmarks = async () => {
  const res = await axios.get('/api/user/bookmarks')
  console.log(res)
  return res.data
}

const updateFavoriteClasses = async (classes) => {
  const res = await axios.put('/api/user/updateMe', classes)

  console.log(res)
  return res
}

export {
  login,
  signUp,
  getAllNews,
  createNews,
  addBookmark,
  getBookmarks,
  updateFavoriteClasses,
  getOneNews,
  deleteNews,
}
