import NextButton from '../../ui/NextButton/NextButton';
import styles from './PicturePageFooter.module.css';

const PicturePageFooter: React.FC = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.step}>Шаг 1/3</p>
            <NextButton disabled={true}/>
        </div>
    );
}
 
export default PicturePageFooter;