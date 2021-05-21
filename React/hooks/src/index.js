import React from 'react';
import ReactDOM from 'react-dom';

// Exercise 1
// import IntroducingHooks from './IntroducingHooks';

// Exercise 2
// import HooksAtAGlance from "./HooksAtAGlance";

// Exercise 3
// import Counter from "./UsingStateHook";

// Exercise 4
import Counter from "./UsingEffectHook";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);