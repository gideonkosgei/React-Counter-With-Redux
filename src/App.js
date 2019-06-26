import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import  { increment, decrement } from './actions';


function App() {
  const counter = useSelector (state => state.counter);
  const isLogged = useSelector (state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> counter {counter}</h1>
      <button onClick = {() => dispatch(increment(2))}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>

      {isLogged ?  <h3> Valuable info i should see </h3> : '' }     

    </div>
  );
}

export default App;
 