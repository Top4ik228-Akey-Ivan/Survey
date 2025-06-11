import arrowWhite from '../../assets/icons/ArrowRightWhite.svg';
import arrowGray from '../../assets/icons/ArrowRight.svg';
import styles from './NextButton.module.css';

interface nextButtonProps {
    disabled: boolean;
    onClick: () => void;
}

const NextButton: React.FC<nextButtonProps> = ({disabled, onClick}) => {

    return (
        <button disabled={disabled} className={styles.button} onClick={onClick}>
            <p className={`${styles.text} ${disabled ? styles.disabledText : ''}`}>Далее</p>
            <img src={disabled ? arrowGray : arrowWhite} alt="" />
        </button>
    );
}

export default NextButton;