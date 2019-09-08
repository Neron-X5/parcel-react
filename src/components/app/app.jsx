import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../../actions/app';

import ErrorBoundary from '../error-boundary';

const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.app.counter);
    const [name, setName] = useState('');
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    }, []);

    useEffect(() => {
        document.title = `Clicked ${counter}`;
    }, [counter]);

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleIncrement = () => {
        dispatch(increment(1));
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <ErrorBoundary>
            <main>
                <h1>Name : {name}</h1>
                <input type='text' ref={inputEl} onChange={handleNameChange} value={name} />
                <h1>Counter: {counter}</h1>
                <button onClick={handleIncrement} className='increment'>
                    Increment
                </button>
                <button onClick={handleDecrement} className='decrement'>
                    Decrement
                </button>
            </main>
        </ErrorBoundary>
    );
};

export default App;
