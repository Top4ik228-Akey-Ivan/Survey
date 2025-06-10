import { useState } from 'react';
import styles from './textarea.module.css';

const Textarea = () => {

    const [data, setData] = useState<string>('');

    return (
        <>
            <p className={styles.textareaTitle}>Описание для текстареа</p>
            <textarea className={`${styles.textarea} ${data ? styles.filled : ''}`}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </>
    );
}

export default Textarea;