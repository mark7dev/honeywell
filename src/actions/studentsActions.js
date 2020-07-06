import {
    ADD_STUDENT
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