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

// Exercise 5
/** @see RulesOfHooks.js */

// Exercise 6
/** @see BuildingYourOwnHooks.js */

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);