import React, {useState} from 'react';
import Persons from "./components/Persons"
import NewPerson from './components/NewPerson';

const personsInitials = [
  "Anastasia",
  "Vladimir",
  "Anna",
  "Dmitriy",
  "Daulet",
  "Mariya",
  "Alexey",
  "Saida",
  "Elvira"
];

function App() {
  ///state
  const [persons, setPersons] = useState(personsInitials)

  const addMember = (newMember) => {
    setPersons([...persons, newMember])
  }

  return (
    <div className="container">
      <div className="w-50 mx-auto pt-5">
        <div className="card shadow p-2 ">
          <h3 className="title text-center">
           Our Mafia:
          </h3>
          <NewPerson onAdd = {addMember}/>
          <Persons persons = {persons}/>

      
        </div>
      </div>
    </div>
  );
}

export default App;
   /*  
     const [header, setHeader] = useState('Hello!!!')
   <input value= {header} onChange= {(event)=> setHeader(event.target.value)
          }/> 
      <button 
          onClick ={() => {setHeader('Privet')
          }}
          >CLick</button> */