import { createSlice } from "@reduxjs/toolkit"

export interface Counter {
  value: number
}

const initialState: Counter = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      console.log(state)
      state.value++
    },
  },
})

// export Actions
export const { increment } = counterSlice.actions
export default counterSlice.reducer
