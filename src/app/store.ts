import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
import channelReducer from "../features/channelSlice"

export const store = configureStore({
  
  reducer: {
    user: userReducer,
    channel: channelReducer,
  }
  
})

export type AppDispatch = typeof store.dispatch

// 現在の状態の型を返す
export type RootState = ReturnType<typeof store.getState>