import React, { useState } from 'react';
import styles from './RadioButtonGroup.module.css';
import type { IQuestion } from '../../types';

interface RadioButtonGroupProps {
    options: string[];
    question: IQuestion;
    onChange?: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, question, onChange }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleChange = (index: number) => {
        setSelectedIndex(index);
        if (onChange) onChange(options[index])
    }

    return (
        <div>
            <p className={styles.question}>{question.text}</p>
            <div className={styles.radioGroup}>
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
