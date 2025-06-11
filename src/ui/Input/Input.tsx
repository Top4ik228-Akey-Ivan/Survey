import { useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
    text: string;
}

const Input: React.FC<InputProps> = ({text}) => {

    const [data, setData] = useState<string>('');

    return (
        <div>
            <p className={styles.inputTitle}>{text}</p>
            <input className={`${styles.input} ${data ? styles.filled : ''}`}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    );
}

export default Input;