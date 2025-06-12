import styles from './Input.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { updateField } from '../../redux/slices/surveySlice';

interface InputProps {
    id: string;
    text: string;
}

const Input: React.FC<InputProps> = ({ id, text }) => {

    const data = useSelector((state: RootState) => state.survey.survey[id] || '');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateField({ field: id, value: e.target.value }));
    };

    return (
        <div>
            <p className={styles.inputTitle}>{text}</p>
            <input className={`${styles.input} ${data ? styles.filled : ''}`}
                value={data}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;