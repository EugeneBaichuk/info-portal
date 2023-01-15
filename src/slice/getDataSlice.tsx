import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../apis/conduitAPI"

export const getArticles = createAsyncThunk("getData/getArticles", async (_, {rejectWithValue}) => {
    try {
        const {data} = await api.get('/articles?limit=10&offset=0');
        return data.articles;
    } catch (error) {
        return rejectWithValue(error);
    }
} );

export const getTags = createAsyncThunk("getData/getTags", async (_, {rejectWithValue}) => {
    try {
        const {data} = await api.get('tags');
        return data.tags;
    } catch (error) {
        return rejectWithValue(error);
    }
});

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
    extraReducers: (builder) => {
        builder
        .addCase(getArticles.pending, (state) => {
            state.articles.status = "loading";
            state.articles.error = null;
        })
        .addCase(getArticles.fulfilled, (state, {payload: articles}) => {
            state.articles.status = "resolved";
            state.articles.data = articles;
        })
        .addCase(getArticles.rejected, (state, {payload: error}) => {
            state.articles.status = "rejected";
            state.articles.error = error;
        })
        .addCase(getTags.pending, (state) => {
            state.tags.status = "loading";
            state.tags.error = null;
        })
        .addCase(getTags.fulfilled, (state, {payload: tags}) => {
            state.tags.status = "resolved";
            state.tags.data = tags;
        })
        .addCase(getTags.rejected, (state, {payload: error}) => {
            state.tags.status = "rejected";
            state.tags.error = error;
        })
    }
})

export const { getData } = getDataSlice.actions;
export const showArticles = (state) => state.getData.articles;
export const showTags = (state) => state.getData.tags.data;
export default getDataSlice.reducer;