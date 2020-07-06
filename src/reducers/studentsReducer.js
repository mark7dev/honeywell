import {
    ADD_STUDENT,
    GET_STUDENTS
} from '../types';

const initialState = {
    students: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        default:
            return state;
    }
} 