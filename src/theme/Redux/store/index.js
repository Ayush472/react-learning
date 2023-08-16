import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../reducer/index"

export default configureStore({
     reducer: rootReducer
     })

//The store now has redux-thunk added and the Redux DevTools Extension is turned on