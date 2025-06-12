import { useSelector } from 'react-redux';
import styles from './textarea.module.css';
import type { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { updateField } from '../../redux/slices/surveySlice';

interface TextareaProps {
    id: string;
    text: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, text }) => {

    const data = useSelector((state: RootState) => state.survey.survey[id] || '');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateField({ field: id, value: e.target.value }));
    };

    return (
        <div>
            <p className={styles.textareaTitle}>{text}</p>
            <textarea className={`${styles.textarea} ${data ? styles.filled : ''}`}
                value={data}
                onChange={handleChange}
            />
        </div>
    );
}

export default Textarea;