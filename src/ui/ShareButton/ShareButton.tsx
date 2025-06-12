import send from '../../assets/icons/Send.svg';
import styles from './ShareButton.module.css';

const ShareButton: React.FC = () => {
    return (
        <button className={styles.button}>
            <p className={styles.text}>Поделиться результатами</p>
            <img src={send} alt="" />
        </button>
    );
}
 
export default ShareButton;