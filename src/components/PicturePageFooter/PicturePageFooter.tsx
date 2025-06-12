import type { PictureFile } from '../../pages/PicturePage/PicturePage';
import { useUploadPicturesMutation } from '../../redux/services/picturesApi';
import CheckResultsButton from '../../ui/CheckResultsButton/CheckResultsButton';
import NextButton from '../../ui/NextButton/NextButton';
import ToPicturesButton from '../../ui/ToPicturesButton/ToPicturesButton';
import styles from './PicturePageFooter.module.css';

interface PicturePageFooterProps {
    disabledFirst?: boolean;
    disabledSecond?: boolean;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    filesList: PictureFile[];
}

const PicturePageFooter: React.FC<PicturePageFooterProps> = ({
    disabledFirst, disabledSecond, currentStep, setCurrentStep, filesList
}) => {
    const [upload] = useUploadPicturesMutation();

    const handleNextBtnClick = async () => {
        const formData = new FormData();
        filesList.forEach(({ file }) => {
            formData.append('files', file);
        });


        try {
            await upload(formData).unwrap();
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Ошибка при загрузке файлов', error);
            // Можно добавить уведомление пользователю
        }
    }

    return (
        <div className={styles.footer}>
            <p className={styles.step}>Шаг {currentStep}/{3}</p>

            {currentStep === 1 && (
                <NextButton
                    disabled={disabledFirst || false}
                    onClick={handleNextBtnClick}
                />
            )}

            {currentStep === 2 && (
                <div className={styles.buttonBox}>
                    <ToPicturesButton
                        onClick={() => setCurrentStep(prev => prev - 1)}
                    />
                    <CheckResultsButton
                        disabled={disabledSecond || false}
                        onClick={() => setCurrentStep(prev => prev + 1)}
                    />
                </div>
            )}
        </div>
    );
}

export default PicturePageFooter;