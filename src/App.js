import React from 'react';

import { Counter } from './components';

import '../public/default.css';

const App = () => {

    const products = ["potion", "fire heal", "bicycle"]

    return <><h1>App!</h1>
            <h2>The future of entertainment</h2>
            {products.map(p => <Counter title={p}/>)}
           </>
}

export default App;