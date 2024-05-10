import { configureStore } from "@reduxjs/toolkit";
import movieHomeSliceReducer from "../Components/Movie Home/movieHomeSlice";

export default configureStore({
  reducer: {
    profile: movieHomeSliceReducer,
  },
});
