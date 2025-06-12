import styles from './RadioButtonGroup.module.css';
import type { IQuestion } from '../../types';
import { useDispatch } from 'react-redux';
import { updateField } from '../../redux/slices/surveySlice';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

interface RadioButtonGroupProps {
    options: string[];
    question: IQuestion;
    direction ?: string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, question, direction }) => {
    const dispatch = useDispatch();
    const selectedValue = useSelector(
        (state: RootState) => state.survey.survey[question.id]
    );

    // Получаем индекс выбранного значения
    const selectedIndex = selectedValue ? options.indexOf(selectedValue) : null;

    const handleChange = (index: number) => {
        const value = options[index];
        dispatch(updateField({ field: question.id, value }));
    }

    return (
        <div>
            <p className={styles.question}>{question.text}</p>
            <div 
                className={`
                    ${styles.radioGroup} 
                    ${direction === 'column' ? styles.column : ''}
                    ${direction === 'inline' ? styles.inline : ''}
                `}
            >
                {options.map((label, index) => (
                    <label key={index} className={styles.radioLabel}>
                        <input
                            type="radio"
                            name={`${question.id}${question.text}`}
                            value={label}
                            checked={selectedIndex === index}
                            onChange={() => handleChange(index)}
                        />
                        <span className={styles.radioCustom}></span>
                        <p className={styles.answer}>{label}</p>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioButtonGroup;
