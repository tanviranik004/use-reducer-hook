import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManagement from './components/PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
      <h1>ReducerCount </h1>
      <ReducerCount></ReducerCount>
           <PatientManagement></PatientManagement>
     
    </div>
  );
}

export default App;
