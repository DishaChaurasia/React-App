import React from 'react';
import {add,sub,mul,div} from './Calc';
function App()
{
    return (
        <>
  <ul>
    <li>Sum of two number is {add(40,4)}</li>
    <li>Subtarction of two number is {sub(40,4)}</li>
    <li>division of two number is {div(40,4)}</li>
    <li>multiplication of two number is {mul(40,4)}</li>

  </ul>
 </>
    );
}

export default App;