import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../apis/conduitAPI"

export const getArticles = createAsyncThunk("getData/getArticles", async (_, {rejectWithValue}) => {
    try {
        const res = await api.get('/articles?limit=10&offset=0');
        return res.data.articles;
    } catch (error) {
        return rejectWithValue(error);
    }
} );

export const getTags = createAsyncThunk("getData/getTags", async (_, {rejectWithValue}) => {
    try {
        const res = await api.get('tags');
        const tags = res.data.tags;
        return tags;
    } catch (error) {
        return rejectWithValue(error);
    }
} );

const getDataSlice = createSlice({
    name: "getData",
    initialState: {
        articles: {
            data: [],
            status: null,
            error: null            
        },
        tags: {
            data: [],
            status: null,
            error: null 
        },
    }, 
    reducers: {
        getData: (state, action) => {
            state.articles = action.payload
        }
    },
    extraReducers: {
        [getArticles.pending]: (state) => {
            state.articles.status = "loading";
            state.articles.error = null;
        },
        [getArticles.fulfilled]: (state, {payload}) => {
            state.articles.status = "resolved";
            state.articles.data = payload;
        },
        [getArticles.rejected]: (state, {payload}) => {
            state.articles.status = "rejected";
            state.articles.error = payload;
        },
        [getTags.pending]: (state) => {
            state.tags.status = "loading";
            state.tags.error = null;
        },
        [getTags.fulfilled]: (state, {payload}) => {
            state.tags.status = "resolved";
            state.tags.data = payload;
        },
        [getTags.rejected]: (state, {payload}) => {
            state.tags.status = "rejected";
            state.tags.error = payload;
        },
    }
})

export const { getData } = getDataSlice.actions;
export const showArticles = (state) => state.getData.articles;
export const showTags = (state) => state.getData.tags.data;
export default getDataSlice.reducer;