import {
    ADD_STUDENT,
    GET_STUDENTS,
    DELETE_STUDENT,
    DELETE_STUDENT_SUCCESSFUL,
    DELETE_STUDENT_ERROR
} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export function addStudentAction(student) {
    return async (dispatch) => {
        try {
            await axiosClient.post('/students', student);
            dispatch( addStudent(student) );

            Swal.fire(
                'Success',
                'Student added',
                'success'
            )

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Error to add student, try again'
            })
        }
    }
}

const addStudent = student => ({
    type: ADD_STUDENT,
    payload: student
})


export function getStudentsAction() {
    return async (dispatch) => {
        try {
            const response = await axiosClient.get('./students');
            dispatch( getStudents(response.data) )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Error to show info, try again'
            })
        }
    }
}

const getStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})


export function deleteStudentAction(id) {
    return async (dispatch) => {
        dispatch( deleteStudent(id) );

        try {
            await axiosClient.delete(`/students/${id}`);
            dispatch( deleteStudentSuccessful() );

            // Alert
            Swal.fire(
                'Deleted!',
                'The student has been deleted.',
                'success'
            )
            
        } catch (error) {
            console.log(error);
            dispatch( deleteStudentError() );
        }
    }
}

const deleteStudent = id => ({
    type: DELETE_STUDENT,
    payload: id
})

const deleteStudentSuccessful = () => ({
    type: DELETE_STUDENT_SUCCESSFUL
})

const deleteStudentError = () => ({
    type: DELETE_STUDENT_ERROR,
    payload: true
})