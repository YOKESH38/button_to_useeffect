import './App.css';
import Objiter from './objectiter';
import Button from './buttonstate';
import ColorChange from './changecolor';
import Use from './inout';
import Useeff from './usestate';

function App() {
  const employee = [
    {
      name: "Alex",
      skills: [
        { name: "ReactJS", type: "Frontend" },
        { name: "NodeJS", type: "Backend" },
      ],
    },
    {
      name: "Anna",
      skills: [
        { name: "Angular", type: "Frontend" },
        { name: "Python", type: "Backend" },
      ],
    },
  ];
  return (
    <div className="App">
      <div className='oi'><h1>Objet Data </h1><Objiter  d={employee}/></div>
      <div> <Button/> </div>
      <div> <ColorChange/> </div>
      <div><Use/></div>
      <div><Useeff/></div>
    </div>
  );
}

export default App;
