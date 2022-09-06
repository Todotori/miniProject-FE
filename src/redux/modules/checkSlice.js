import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

createSlice({
    name: 'check',
    initialState,
    reducers: {
        addTag: (state, action) => {
            state.push(action.payload);
        },
        deleteTag: (state, action) => {
            // console.log(action); // payload:항목
            return state.filter(tag => tag !== action.payload);
        },
    },
});



