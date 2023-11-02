import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  console.log("tdfghbjk"),
  async (selectedLanguage) => {
    console.log("hcfgjbkmk" + process.env.NEWS_API_KEY);
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
        process.env.NEWS_API_KEY
      }${selectedLanguage ? `&language=${selectedLanguage}` : ""}`
    );
    const data = await response.json();
    return data;
  }
);

export const searchNewsByTerm = createAsyncThunk(
  "news/searchNewsByTerm",
  async (searchTerm) => {
    let apiUrl = `https://newsapi.org/v2/everything?q=${
      searchTerm ? searchTerm : "bitcoin"
    }&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    console.log(apiUrl, "searched url");
    const response = await fetch(apiUrl);
    return response.json();
  }
);
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
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(searchNewsByTerm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchNewsByTerm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(searchNewsByTerm.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});
export const { addLang, searchNews } = newsSlice.actions;
export default newsSlice.reducer;
