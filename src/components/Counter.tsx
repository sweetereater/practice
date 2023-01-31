import { useState } from 'react';
import cls from './Counter.module.scss';

export function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count => count + 1)

    return (
        <>
            <p>Counter - {count}</p>
            <button className={cls.btn} onClick={incrementCount}>Increase counter value</button>
        </>
    )
} 