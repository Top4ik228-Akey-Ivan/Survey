import chevronRight from '../../assets/icons/ChevronRight.svg';
import chevronRightWhite from '../../assets/icons/ChevronRightWhite.svg';
import styles from '../NextButton/NextButton.module.css';

const CheckResultsButton: React.FC = () => {
    const disabled = false;

    return (
        <button disabled={disabled} className={styles.button}>
            <p className={`${styles.text} ${disabled ? styles.disabledText : ''}`}>
                Узнать результаты
            </p>
            <img src={disabled ? chevronRight : chevronRightWhite} alt="" />
        </button>
    );
}

export default CheckResultsButton;