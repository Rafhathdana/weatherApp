import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NEWS_API_KEY } from "../../utils/constants";

const PAGE_SIZE = 10;

export const searchNewsFetch = createAsyncThunk(
  "news/searchNewsByTerm",
  async (data) => {
    const { searchTerm, languageCode, page } = data;
    const limit = page * PAGE_SIZE;
    const skip = (page - 1) * PAGE_SIZE;

    const apiUrl = `https://newsapi.org/v2/everything?q=${
      searchTerm || "bitcoin"
    }&apiKey=${NEWS_API_KEY}&pageSize=${limit}&language=${
      languageCode || ""
    }&skip=${skip}`;
    const response = await fetch(apiUrl);
    return response.json();
  }
);

// Rest of your code for createSlice, reducers, and extraReducers...

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    data: null,
    language: "",
    term: "",
  },
  reducers: {
    addLang: (state, action) => {
      state.language = action.payload;
    },
    searchNews: (state, action) => {
      state.term = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchNewsFetch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchNewsFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(searchNewsFetch.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});
export const { addLang, searchNews } = newsSlice.actions;
export default newsSlice.reducer;
