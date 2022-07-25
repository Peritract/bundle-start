import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import App from './App'



//OLD >> ReactDOM.render(<App name="Ash" otherName="Misty"/>, document.getElementById('trainers'))

// NEW >>
const root = createRoot(document.getElementById('root')); 
root.render(<App />)
