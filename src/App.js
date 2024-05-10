import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// customize your own hook
//useState('')

function useToggle () {
  // repeat the logic
  const [value, setValue] = useState(true);
  const toggle = () =>{
    setValue(!value);
  }
  // return the value and function
  return {
    value,
    toggle
  }
}

function App() {
  const { value, toggle } = useToggle()

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
