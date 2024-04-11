import './App.css';
import Header from "./Components/Heading"
import Signalment from "./Components/Signalment"
import Vitals from "./Components/Vitals"
import Bodysystems from './Components/BodySystems';
import Results from './Components/Results';
import PatientForm from './Components/PatientForm';


function App() {
  return (
    <div>
      <Header className='App-header' />
      <PatientForm />
    </div>
  );
}

export default App;
