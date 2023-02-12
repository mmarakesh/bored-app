import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [exercise, setExercise] = useState('');

  const getDate = async () => {
    const resalt = await fetch(`http://www.boredapi.com/api/activity/`);
    const res = await resalt.json();
    setExercise(res.activity);
  };

  useEffect(() => {
  getDate();
  }, []);


  return (
    <div className="App">
      <h1>If you don't know what to do?</h1>
      <p>Click the button and get a new thing to do </p>
      <button onClick={getDate}>Don't be bored</button>
      <p className='activity'>{exercise}</p>
    </div>
  );
}

export default App;
