import {
    ADD_STUDENT,
    GET_STUDENTS,
    DELETE_STUDENT,
    DELETE_STUDENT_SUCCESSFUL,
    DELETE_STUDENT_ERROR,
    SELECT_STUDENT
} from '../types';

const initialState = {
    students: [],
    error: null,
    studentDeleted: null,
    studentSelected: null
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
        case DELETE_STUDENT:
            return {
                ...state,
                studentDeleted: action.payload
            }
        case DELETE_STUDENT_SUCCESSFUL:
            return {
                ...state,
                students: state.students.filter( student => student.id !== state.studentDeleted),
                studentDeleted: null
            }
        case DELETE_STUDENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SELECT_STUDENT:
            return {
                ...state,
                studentSelected: action.payload
            }
        default:
            return state;
    }
} 