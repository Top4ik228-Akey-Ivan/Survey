import NextButton from '../../ui/NextButton/NextButton';
import styles from './PicturePageFooter.module.css';

interface PicturePageFooterProps {
    disabled: boolean;
    currentStep: number;
    totalSteps: number;
}

const PicturePageFooter: React.FC<PicturePageFooterProps> = ({
    disabled, currentStep, totalSteps
}) => {
    return (
        <div className={styles.footer}>
            <p className={styles.step}>Шаг {currentStep}/{totalSteps}</p>
            <NextButton disabled={disabled}/>
        </div>
    );
}   
 
export default PicturePageFooter;