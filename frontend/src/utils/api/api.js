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

  console.log(res.data)
  return res
}

export { login, signUp ,getAllNews }
