const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    author: "",
    pageNumber: 1
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.author = "";
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            state.author = "";
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.author = "";
            state.search = action.payload;
        },
        authorSelected: (state, action) => {
            state.tags = [];
            state.search = "";
            state.pageNumber = 1;
            state.author = action.payload;
        },
        resetFilter: (state) => {
            state.tags = [];
            state.search = "";
            state.author = "";
        },
        pageSelected: (state, action) => {
            state.pageNumber = action.payload
        }
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, authorSelected, resetFilter, pageSelected } = filterSlice.actions;
