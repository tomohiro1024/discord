import { createSlice } from "@reduxjs/toolkit";
import { initialChannelState } from "../Types";

const initialState: initialChannelState = {
  channelId: null,
  channelName: null,
}

// channelSliceはユーザーがログイン、ログアウトしているかなどの監視をしている。
export const channelSlice = createSlice({
  name: "channel",
  initialState: initialState,
  // reducersはStateを変更することができる。
  reducers: {
    setChannelInfo: (state, action) => {
      // 現在のチャンネルのidを選択したチャンネルidに更新する
      // 現在のチャンネルの名前を選択したチャンネルの名前に更新する
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    }
  }
})
console.log(channelSlice)

export const { } = channelSlice.actions
export default channelSlice.reducer