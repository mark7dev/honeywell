import React, { useState } from 'react';

const Form = () => {

    const [info, setInfo] = useState({
        name: '',
        last: '',
        street: '',
        city: '',
        phone: '',
        gpa: ''
    });

    const [error, setError] = useState(false);

    const { name, last, street, city, phone, gpa } = info;

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
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
    };

    const addStudent = e => {
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
            console.log(info);
            setInfo({
                name: '',
                last: '',
                street: '',
                city: '',
                phone: '',
                gpa: ''
            })
    
            setError(false);
        }

    }

    return (
        <> 
            <form
                onSubmit={addStudent}
            >
                <div>
                    <label htmlFor="name">First Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="last">Last Name</label>
                    <input 
                        type="text"
                        id="last"
                        name="last"
                        value={last}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="street">Street Number/Name</label>
                    <input 
                        type="text"
                        id="street"
                        name="street"
                        value={street}
                        onChange={handleChange}
                    /> 
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input 
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input 
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
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
                <input type="submit" value="Add student"/>
            </form>
            { error ? <p>All fields are required</p> : null }
        </>
    );
}
 
export default Form;