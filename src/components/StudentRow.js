import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deleteStudentAction } from '../actions/studentsActions';

const StudentRow = ({student}) => {

    const { name, last, street, city, phone, gpa, id } = student;

    const dispatch = useDispatch();

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

    return ( 
        <tr>
            <td>{name}</td>
            <td>{last}</td>
            <td>{street}</td>
            <td>{city}</td>
            <td>{phone}</td>
            <td>{gpa}</td>
            <td><Link to={`/student/${id}`}>See details</Link></td>
            <td><button onClick={() => confirmDeleteStudent(id)}>X</button></td>
        </tr>
    );
}
 
export default StudentRow;