import { useState } from 'react';
import styles from './Input.module.css';

const Input = () => {

    const [data, setData] = useState<string>('');

    return (
        <>
            <p className={styles.inputTitle}>Описание для инпута</p>
            <input className={`${styles.input} ${data ? styles.filled : ''}`}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </>
    );
}

export default Input;