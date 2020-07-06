import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentAction } from '../actions/studentsActions';
import './styles/Form.scss';

const Form = ({history}) => {

    const [student, setStudent] = useState({
        name: '',
        last: '',
        street: '',
        city: '',
        phone: '',
        gpa: ''
    });

    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const addStudent = student => dispatch( addStudentAction(student) );

    const { name, last, street, city, phone, gpa } = student;

    const gpaOptions = [
        { id: 0, value: '', gpaVal: 'Select'},
        { id: 1, value: 'A+', gpaVal: 'A+'},
        { id: 3, value: 'A', gpaVal: 'A'},
        { id: 4, value: 'A-', gpaVal: 'A-'},
        { id: 5, value: 'B+', gpaVal: 'B+'},
        { id: 6, value: 'B', gpaVal: 'B'},
        { id: 7, value: 'B-', gpaVal: 'B-'},
        { id: 8, value: 'C+', gpaVal: 'C+'},
        { id: 9, value: 'C', gpaVal: 'C'},
        { id: 10, value: 'C-', gpaVal: 'C-'},
        { id: 11, value: 'D+', gpaVal: 'D+'},
        { id: 12, value: 'D', gpaVal: 'D'},
        { id: 13, value: 'E/F', gpaVal: 'E/F'}
    ];

    const handleChange = e => {
        setStudent({
            ...student,
            [e.target.name] : e.target.value
        })
    };

    const submitStudent = e => {
        e.preventDefault();

        if(
            name === '' ||
            last === '' ||
            street === '' ||
            city === '' ||
            phone === '' ||
            gpa === ''
        ) {
            setError(true);
        } else {
            addStudent(student);
            setStudent({
                name: '',
                last: '',
                street: '',
                city: '',
                phone: '',
                gpa: ''
            })
            setError(false);
            history.push('/table');
        }

    }

    return (
        <div className="form__container">  
            <h3>INFORMATION OF THE STUDENT</h3>
            <div className="form">
                <form
                    onSubmit={submitStudent}
                >
                    <div className="info">
                        <label htmlFor="name">First Name</label>
                        <input className="form__input"
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <label htmlFor="last">Last Name</label>
                        <input className="form__input"
                            type="text"
                            id="last"
                            name="last"
                            value={last}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <label htmlFor="street">Street Number/Name</label>
                        <input className="form__input"
                            type="text"
                            id="street"
                            name="street"
                            value={street}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className="info">
                        <label htmlFor="city">City</label>
                        <input className="form__input"
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <label htmlFor="phone">Phone number</label>
                        <input className="form__input"
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <label>GPA</label>
                        <select name="gpa" value={gpa} onChange={handleChange}>
                            { gpaOptions.map(item => (
                                <option
                                    key={item.id} 
                                    value={item.value}
                                >{item.gpaVal}</option>
                            ))}
                        </select>
                    </div>
                    <div className="submit__container">
                        <input className="btn__submit" type="submit" value="Add student"/>
                    </div>
                </form>
                { error ? <p className="message">All fields are required</p> : null }
            </div>
        </div>
    );
}
 
export default Form;