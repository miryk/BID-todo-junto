import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <PersonCard info={{firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"}}/>
    </div>
  );
}

export default App;
