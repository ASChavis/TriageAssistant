import './App.css';
import Header from "./componets/Heading"
import Signalment from "./componets/Signalment"
import Vitals from "./componets/Vitals"
import Bodysystems from './componets/BodySystems';
import Results from './componets/Results';


function App() {
  return (
    <div>
    <Header />
    <Signalment />
    <Vitals />
    <Bodysystems />
    <Results />
    </div>
  );
}

export default App;
