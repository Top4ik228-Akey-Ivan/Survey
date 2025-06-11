import chevronLeft from '../../assets/icons/chevronLeft.svg';
import styles from './ToPicturesButton.module.css';

const ToPicturesButton: React.FC = () => {

    return (
        <button className={styles.button}>
            <img src={chevronLeft} alt="" />
            <p className={styles.text}>К загрузке рисунков</p>
        </button>
    );
}

export default ToPicturesButton;