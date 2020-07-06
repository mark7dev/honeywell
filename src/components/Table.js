import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAction } from '../actions/studentsActions';
import StudentRow from './StudentRow';

const Table = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getStudents = () => dispatch( getStudentsAction() );
        getStudents();
    }, [])

    const students = useSelector( state => state.students.students );

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
                    { students.length === 0 ? 'There are not students' : (
                        students.map(student => (
                            <StudentRow 
                                key={student.id}
                                student={student}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}
 
export default Table;