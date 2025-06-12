import download from '../../assets/icons/download.svg';
import styles from './DownloadButton.module.css';

const DownloadButton: React.FC = () => {
    return (
        <button className={styles.button}>
            <p className={styles.text}>Скачать отчет PDF</p>
            <img src={download} alt="" />
        </button>
    );
}
 
export default DownloadButton;