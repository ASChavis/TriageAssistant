import './App.css';
import Header from "./Components/Heading"
import Signalment from "./Components/Signalment"
import Vitals from "./Components/Vitals"
import Bodysystems from './Components/BodySystems';
import Results from './Components/Results';
import PatientForm from './Components/PatientForm';
import PatientTable from './Components/PatientTable';


function App() {
  return (
    <div className="appContainer">
      <PatientForm />
      {/* <PatientTable /> */}
    </div>
  );
}

export default App;
