import React, { useState } from 'react';
import { LoginForm } from './LoginForm';

const getComplexValue = () => {
  // ...
  return 10;
}
const App = () => {
  // the first is state, the second is function to update state
  // const [count, setCount] = useState(10);
  // useState accepted function only execute one time
  // useState(() => getComplexValue())
  const [{count, count2} , setCount] = useState({count: 10, count2: 20});
  const [{age}, setAge] = useState({ name:'foobar', age: 34 });
  // setCount(currCount => currCount + 1);
  return (
    <div>
      <div>{age}</div>
      <div>Count: {count}</div>
      <div>Count2: {count2}</div>
      <button
        onClick={() => {
            setCount(currState => ({
              ...currState, // keep other state same
              count: currState.count + 1
            }));
            setAge(currState => ({
              ...currState,
              age: currState.age + 1,
            }));
          }
        }
      > + </button>

      <LoginForm />
    </div>
  );
}

export default App;