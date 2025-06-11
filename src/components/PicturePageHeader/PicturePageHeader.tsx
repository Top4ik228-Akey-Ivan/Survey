import styles from './PicturePageHeader.module.css';
import warning from '../../assets/icons/warning.svg';

const PicturePageHeader: React.FC = () => {
    return (
        <div className={styles.header}>
            <p className={styles.title}>Загрузите фотографии рисунков</p>
            <div className={styles.warning}>
                <img src={warning} alt="" />
                <p className={styles.warningText}>
                    Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб
                </p>
            </div>
        </div>
    );
}

export default PicturePageHeader;