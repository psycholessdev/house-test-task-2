import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from './postsSlice'

// Configure the Redux store
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
})

// Enable RTK Query listeners for refetching and other features
setupListeners(store.dispatch)

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
