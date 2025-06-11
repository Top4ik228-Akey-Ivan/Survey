import chevronLeft from '../../assets/icons/chevronLeft.svg';
import styles from './ToPicturesButton.module.css';

interface ToPicturesButtonProps {
    onClick: () => void;
}

const ToPicturesButton: React.FC<ToPicturesButtonProps> = ({onClick}) => {

    return (
        <button onClick={onClick} className={styles.button}>
            <img src={chevronLeft} alt="" />
            <p className={styles.text}>К загрузке рисунков</p>
        </button>
    );
}

export default ToPicturesButton;