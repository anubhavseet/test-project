import {configureStore} from "@reduxjs/toolkit"
import Todosreducer from "./Todoslice"
export const store = configureStore({
    reducer:Todosreducer
})