import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deleteStudentAction, getStudentAction } from '../actions/studentsActions';
import './styles/StudentRow.scss';

const StudentRow = ({student}) => {

    const { name, last, street, city, phone, gpa, id } = student;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteStudent = id => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

                // Action to delete
                dispatch( deleteStudentAction(id) );
                
            }
        })
        
    }

    const goDetails = student => {
        dispatch( getStudentAction(student) );
        history.push(`/student/${student.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td>{last}</td>
            <td>{street}</td>
            <td>{city}</td>
            <td>{phone}</td>
            <td>{gpa}</td>
            <td><button class="btn btn__details" onClick={() => goDetails(student)}>See details</button></td>
            <td><button class="btn btn__delete" onClick={() => confirmDeleteStudent(id)}>X</button></td>
        </tr>
    );
}
 
export default StudentRow;