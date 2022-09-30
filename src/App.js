import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  }

  const minus = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    } else (
      alert('Ниже нуля нельзя!')
    )
  }

  const reset = () => {
    setCounter(0);
  }

  const handleChange = (event) => {
    setCounter(Number(event.target.value));
  }

  return (
    <div className="App">
      <Button handleClick={minus}>
        -
      </Button>
      <input value={counter} onChange={handleChange}/>
      <Button isRed handleClick={plus}>
        +
      </Button>
      <Button isRed={false} handleClick={reset}>Reset</Button>
    </div>
  );
}

export default App;
