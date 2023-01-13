import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <PersonCard info={{firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"}}/>
      <PersonCard info={{firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown"}}/>
      <PersonCard info={{firstName: "Fillmore", lastName: "Millard", age: 50, hairColor: "Brown"}}/>
      <PersonCard info={{firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}}/>
    </div>
  );
}

export default App;
