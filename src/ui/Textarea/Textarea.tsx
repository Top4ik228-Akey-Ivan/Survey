import { useState } from 'react';
import styles from './textarea.module.css';

const Textarea: React.FC = () => {

    const [data, setData] = useState<string>('');

    return (
        <div>
            <p className={styles.textareaTitle}>Описание для текстареа</p>
            <textarea className={`${styles.textarea} ${data ? styles.filled : ''}`}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    );
}

export default Textarea;