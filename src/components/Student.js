import React from 'react';
import avatar from '../images/avatar.jpg';

const Student = () => {

    const student = {
        id: 1,
        name: 'Peter',
        last: 'McGill',
        street: '5th Avenue',
        city: 'New York',
        phone: '123456',
        gpa: 'A+'
    }

    return ( 
        <>
            <div>
                <img src={avatar} alt="Avatar"/>
                <div>
                    <h4><b>{student.name} {student.last}</b></h4> 
                    <p>Street: {student.street}</p>
                    <p>City: {student.city}</p> 
                    <p>Phone: {student.phone}</p>
                    <p>GPA: {student.gpa}</p>   
                </div>
            </div>
        </>
    );
}
 
export default Student;