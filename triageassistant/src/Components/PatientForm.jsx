import React, { useState } from 'react';

function PatientForm() {
    const [patient, setPatient] = useState({ name: '', age: '', species: '' });

    const handleChange = (e) => {
        setPatient({...patient, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingPatients = JSON.parse(localStorage.getItem('patients')) || [];
        localStorage.setItem('patients', JSON.stringify([...existingPatients, patient]));
        setPatient({ name: '', age: '', species: '' });
        alert('Patient added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={patient.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={patient.age}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="species"
                placeholder="Species"
                value={patient.species}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Patient</button>
        </form>
    );
}

export default PatientForm;
