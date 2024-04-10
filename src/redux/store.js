import { configureStore } from '@reduxjs/toolkit'
import Reducer from './form/Reducer'

const store = configureStore({
  reducer: {
   FormReducer: Reducer
  }
})

export default store;