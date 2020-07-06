import React from 'react';
import { Link } from 'react-router-dom';

const StudentRow = ({student}) => {

    const deleteStudent = id => {
        console.log(id);
        
    }

    return ( 
        <tr>
            <td>{student.name}</td>
            <td>{student.last}</td>
            <td>{student.street}</td>
            <td>{student.city}</td>
            <td>{student.phone}</td>
            <td>{student.gpa}</td>
            <td><Link to={`/student/${student.id}`}>See details</Link></td>
            <td><button onClick={() => deleteStudent(student.id)}>X</button></td>
        </tr>
    );
}
 
export default StudentRow;