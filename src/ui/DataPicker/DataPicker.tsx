import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DataPicker.module.css';
import chevronRight from '../../assets/icons/ChevronRightSingle.svg';
import chevronLeft from '../../assets/icons/ChevronLeft.svg';

import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru);

interface DataPrickerProps {
    text: string;
}

const DataPicker: React.FC<DataPrickerProps> = ({ text }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleClick = (d: Date | null) => {
        setSelectedDate(d);
    };

    return (
        <div>
            <p className={styles.desc}>{text}</p>
            <DatePicker
                className={styles.dateInput}
                selected={selectedDate}
                onChange={handleClick}
                locale="ru"
                dateFormat="dd.MM.yyyy"
                placeholderText="Дата"
                popperPlacement="bottom-start"
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => {
                    const month = date.toLocaleString('ru', { month: 'long' });
                    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
                    const year = date.getFullYear();

                    return (
                        <div className={styles.customHeader}>
                            <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                type="button"
                                className={styles.navButton}
                            >
                                <img src={chevronLeft} alt="Previous month" />
                            </button>
                            <div className={styles.monthYear}>
                                <span className={styles.month}>{capitalizedMonth}</span>{' '}
                                <span className={styles.year}>{year}</span>
                            </div>
                            <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                type="button"
                                className={styles.navButton}
                            >
                                <img src={chevronRight} alt="Next month" />
                            </button>
                        </div>
                    );
                }}

            />
        </div>
    );
};

export default DataPicker;
