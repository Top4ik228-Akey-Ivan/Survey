import arrowWhite from '../../assets/icons/ArrowRightWhite.svg';
import arrowGray from '../../assets/icons/ArrowRight.svg';
import styles from './NextButton.module.css';

interface nextButton {
    disabled: boolean;
}

const NextButton: React.FC<nextButton> = ({disabled}) => {

    return (
        <button disabled={disabled} className={styles.button}>
            <p className={`${styles.text} ${disabled ? styles.disabledText : ''}`}>Далее</p>
            <img src={disabled ? arrowGray : arrowWhite} alt="" />
        </button>
    );
}

export default NextButton;