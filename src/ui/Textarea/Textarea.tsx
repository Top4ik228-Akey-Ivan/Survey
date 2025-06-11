import { useState } from 'react';
import styles from './textarea.module.css';

interface TextareaProps {
    text: string;
}

const Textarea: React.FC<TextareaProps> = ({text}) => {
    const [data, setData] = useState<string>('');

    return (
        <div>
            <p className={styles.textareaTitle}>{text}</p>
            <textarea className={`${styles.textarea} ${data ? styles.filled : ''}`}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    );
}

export default Textarea;