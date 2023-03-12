import { createSlice } from "@reduxjs/toolkit"
import data from "../data/data.json"
import {students, assignments} from "../data/studentdata"

const initialState = {
    data: data,
    newData: data,
    students: students,
    assignments: assignments,
    filters: []
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addFilterStudent: (state, action) => {
            return {...state, 
                filters: [...state.filters, action.payload],
                newData: state.newData.filter(item => !item.name.includes(action.payload))
            }
        },        
        removeFilterStudent: (state, action) => {
            return {...state, 
                filters: state.filters.filter((item) => item !== action.payload), 
                newData: [...new Set([...state.newData, ...state.data.filter(item => item.name.includes(action.payload))])]
            }
        },
        addFilter: (state, action) => {
            return {...state, filters: [...state.filters, action.payload]}
        },        
        removeFilter: (state, action) => {
            return {...state, filters: state.filters.filter((item) => item !== action.payload)}
        },
    }
})

export const {addFilterStudent, removeFilterStudent, addFilter, removeFilter } = dataSlice.actions

export default dataSlice.reducer