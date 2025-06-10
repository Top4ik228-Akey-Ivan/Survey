import React, { useState } from 'react';
import styles from './RadioButtonGroup.module.css';

const options = ['Один', 'Два', 'Три', 'Четыре', 'Пять'];

const RadioButtonGroup: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <div className={styles.radioGroup}>
            {options.map((label, index) => (
                <label key={index} className={styles.radioLabel}>
                    <input
                        type="radio"
                        name="example"
                        value={label}
                        checked={selectedIndex === index}
                        onChange={() => setSelectedIndex(index)}
                    />
                    <span className={styles.radioCustom}></span>
                    {label}
                </label>
            ))}
        </div>
    );
};

export default RadioButtonGroup;
