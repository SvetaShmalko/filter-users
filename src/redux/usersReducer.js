import { GET_RANDOM_USERS, GET_FILTERED_USERS } from './constants'

const initialState = {
    users: [
        // {id:1, name: 'Anna'},
        // {id:2, name: 'Kate'},
        // {id:3, name: 'Lena'},
        // {id:4, name: 'Sveta'},
        // {id:5, name: 'Liza'},
        // {id:6, name: 'Anna'},
        // {id:7, name: 'Kate'},
        // {id:8, name: 'Lena'},
        // {id:9, name: 'Sveta'},
        // {id:10, name: 'Liza'}
      ],
      filteredUsers: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_USERS:
      return {...state, users: [...state.users, ...action.payload]}
    case GET_FILTERED_USERS:
      return {...state, filteredUsers: action.payload}
    default: return state
  }
}