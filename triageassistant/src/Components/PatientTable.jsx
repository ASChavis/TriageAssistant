import React, { useState, useEffect } from 'react';

function PatientTable() {
    const [patients, setPatients] = useState([]);
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        const loadedPatients = JSON.parse(localStorage.getItem('patients')) || [];
        setPatients(loadedPatients);
        
        if (loadedPatients.length > 0) {
            setHeaders(Object.keys(loadedPatients[0]));
        }
    }, []);

    return (
        <table id="patient-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {patients.map((patient, index) => (
                    <tr key={index}>
                        {headers.map((header, idx) => (
                            <td key={idx}>{patient[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PatientTable;
