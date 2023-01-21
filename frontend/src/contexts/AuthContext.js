import { useReducer, useContext, createContext } from 'react'
import { login, signUp } from '../utils/api/api'

const AUTH_SIGNUP = 'AUTH_SIGNUP'
const AUTH_SIGNIN = 'AUTH_SIGNIN'
const AUTH_SIGNOUT = 'AUTH_SIGNOUT'
const UPDATE_FAV = 'UPDATE_FAV'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const AuthProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isAdmin: false,
    name: '',
    email: '',
    id: 0,
    favoriteClasses: [],
  }

  const authReducer = (state, action) => {
    const { type, payload } = action
    console.log(payload)
    let newState
    switch (type) {
      case AUTH_SIGNUP:
        newState = { ...state }
        if (payload.user.isAdmin) {
          newState.isAdmin = true
        }
        newState.isLoggedIn = true
        newState.id = payload.user.id
        newState.name = payload.user.name
        newState.email = payload.user.email
        newState.favoriteClasses = payload.user.favoriteClasses
        return newState

      case AUTH_SIGNIN:
        newState = { ...state }
        if (payload.user.isAdmin) {
          newState.isAdmin = true
        }
        newState.isLoggedIn = true
        newState.id = payload.user.id
        newState.name = payload.user.name
        newState.email = payload.user.email
        newState.favoriteClasses = payload.user.favoriteClasses.split(',')

        return newState

      case UPDATE_FAV:
        newState = { ...state }
        console.log(payload.favoriteClasses)
        newState.favoriteClasses = payload.favoriteClasses.split(',')

        return newState
    }
  }

  const [auth, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthStateContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const doLogin = async (dispatch, { username, password }) => {
  try {
    const { data } = await login(username, password)
    dispatch({ type: AUTH_SIGNIN, payload: data.data })
  } catch (error) {
    console.log(error)
  }
}

const doSignup = async (disaptch, { name, email, password }) => {
  try {
    const { data } = await signUp(name, email, password)
    disaptch({ type: AUTH_SIGNUP, payload: data.data })
  } catch (error) {
    console.group(error)
  }
}

const updateFav = async (disaptch, { newFav }) => {
  try {
    disaptch({ type: UPDATE_FAV, payload: { favoriteClasses: newFav } })
  } catch (error) {
    console.log(error)
  }
}

const useAuth = () => {
  return useContext(AuthStateContext)
}

const useAuthDispatch = () => {
  return useContext(AuthDispatchContext)
}

export default AuthProvider

export { useAuth, useAuthDispatch, doLogin, doSignup, updateFav }
