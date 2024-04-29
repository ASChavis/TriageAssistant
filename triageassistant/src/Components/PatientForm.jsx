import React, { useState } from 'react';


const triageQuestions = [
  {
    id: 1,
    text: "Level of Consciousness?", 
    answers: {
        Alert: { label: "Alert", points: 0},
        Lethargic: { label: "Lethargic", points: 10},
    }
  },
{
    id: 2,
    text: "Airway Assessment",
    answers: {
        Patent: { label: "Patent", points: 0},
        Partial: { label: "Wheezing", points: 10},
        Obstructed: {label: "Obstructed", points: 20}
    }
},
{
    id: 3,
    text: "Breathing",
    answers: {
        Normal: { label: "Normal", points: 0},
        Labored: { label: "Labored", points: 15},
        Apneic: { label: "No Breathing", points: 20}
    }
},
{
    id: 4,
    text: "Circulation",
    answers: {
        Normal: { label: "Normal", points: 0},
        Compromised: { label: "Irregular Pulse", points: 10},
        CardiacArrest: { label: "No Pulse", points: 20}
    }
}
];

const criticalScoreThreshold = 20; 

function PatientForm() {
  const [patient, setPatient] = useState({
    name: '', 
    age: '', 
    species: '',
        //Add Gender
    fixed: '',
    triageQuestions: {},
    triageScore: 0
  });
  const [stage, setStage] = useState(0); 

  
  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = () => {
    const existingPatients = JSON.parse(localStorage.getItem('patients')) || [];
    localStorage.setItem('patients', JSON.stringify([...existingPatients, patient]));
    alert('Patient added successfully!');
  };

 
  const handleQuestionResponse = (questionId, answer) => {
    const question = triageQuestions.find(q => q.id === questionId);
    const answerPoints = question.answers[answer].points;
    setPatient(prev => ({
      ...prev,
      triageQuestions: { ...prev.triageQuestions, [questionId]: answer },
      triageScore: prev.triageScore + answerPoints
    }));
  };

  
  const advanceStage = () => {
    if (stage === 0) {
      setStage(1); 
    } else if (stage === 1) {
      if (patient.triageScore >= criticalScoreThreshold) {
        // Critical alert
        alert('Critical condition! Send the patient back immediately.');
      } else {
        handleSubmit(); 
      }
    }
  };


  return (
    <div className="triage-form">
      <div className="triage-form-header">Triage Assessment:</div>
      {stage === 0 && (
        <>
          {/* Demographics form fields */}
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

          <select
            name="species"
            value={patient.species}
            onChange={handleChange}
            required
            >
            <option value="" disabled>Species</option>
            <option value="Cat">Cat</option>
            <option value="Tabby Cat">Tabby Cat</option>
          </select>

          <select
            name="fixed"
            value={patient.fixed}
            onChange={handleChange}
            required
            >
            <option value="" disabled>Is the patient fixed?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          
          {/* ... other demographic fields ... */}
          <button type="button" onClick={() => advanceStage()}>
            Begin Triage
          </button>
        </>
      )}

      {stage === 1 && (
        <>
          {triageQuestions.map((question) => (
            <div key={question.id}>
              <label htmlFor={`question-${question.id}`}>{question.text}</label>
              <select
                id={`question-${question.id}`}
                name={`question-${question.id}`}
                onChange={(e) => handleQuestionResponse(question.id, e.target.value)}
                required
              >
                <option value="" disabled>Select an option</option>
                {Object.entries(question.answers).map(([key, value]) => (
                  <option key={key} value={key}>{value.label}</option>
                ))}
              </select>
            </div>
          ))}
          <button type="button" onClick={() => advanceStage()}>
            Submit Triage
          </button>
        </>
      )}
    </div>
  );
}

export default PatientForm;
