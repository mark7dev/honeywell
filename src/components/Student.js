import React from 'react';
import { useSelector } from 'react-redux';
import avatar from '../images/avatar.jpg';
import './styles/Student.scss';

const Student = () => {

    const student = useSelector( state => state.students.studentSelected);

    if(!student) return null;

    const { name, last, street, city, phone, gpa } = student;

    return (
        <div className="card__container">
            <div className="card">
                <div className="img__container">
                    <img src={avatar} alt="Avatar"/>
                </div>
                <div className="card__info">
                    <h4><b>{name} {last}</b></h4> 
                    <p>Street: {street}</p>
                    <p>City: {city}</p> 
                    <p>Phone: {phone}</p>
                    <p>GPA: {gpa}</p>   
                </div>
            </div>
        </div> 
        
    );
}
 
export default Student;