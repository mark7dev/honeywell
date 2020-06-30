import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {

    const students = [
        {   
            id: 1,
            name: 'Peter',
            last: 'McGill',
            street: '5th Avenue',
            city: 'New York',
            phone: '123456',
            gpa: 'A+'
        },
        {
            id: 2,
            name: 'James',
            last: 'Taylor',
            street: 'Tree Avenue',
            city: 'San Diego',
            phone: '789654',
            gpa: 'C'
        },
        {
            id: 3,
            name: 'Zach',
            last: 'Thomas',
            street: 'Red Field',
            city: 'Los Angeles',
            phone: '258741',
            gpa: 'B-'
        }
    ];

    const deleteStudent = id => {
        console.log(id);
        
    }

    return ( 
        <>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Street Number/Name</th>
                        <th>City</th>
                        <th>Phone number</th>
                        <th>GPA</th>
                        <th>See details</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        { students.map(student => (
                            <tr 
                                key={student.id}
                            >
                                <td>{student.name}</td>
                                <td>{student.last}</td>
                                <td>{student.street}</td>
                                <td>{student.city}</td>
                                <td>{student.phone}</td>
                                <td>{student.gpa}</td>
                                <td><Link to={`/student/${student.id}`}>See details</Link></td>
                                <td><button onClick={() => deleteStudent(student.id)}>X</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}
 
export default Table;