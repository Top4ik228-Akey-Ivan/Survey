import { useSelector } from 'react-redux';
import { SurveyData } from '../../constants/constants';
import type { PictureFile } from '../../pages/PicturePage/PicturePage';
import { useUploadPicturesMutation } from '../../redux/services/picturesApi';
import { useUploadSurveyMutation } from '../../redux/services/surveyApi';
import CheckResultsButton from '../../ui/CheckResultsButton/CheckResultsButton';
import NextButton from '../../ui/NextButton/NextButton';
import ToPicturesButton from '../../ui/ToPicturesButton/ToPicturesButton';
import styles from './PicturePageFooter.module.css';
import type { RootState } from '../../redux/store';

interface PicturePageFooterProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    filesList?: PictureFile[];
}

const PicturePageFooter: React.FC<PicturePageFooterProps> = ({
    currentStep, setCurrentStep, filesList
}) => {

    const uploadedPictures = useSelector((state: RootState) => state.pictures.uploadedPictures)
    const allUploaded = [1, 2, 3].every((id) =>
        uploadedPictures.some(picture => picture.id === id)
    );

    const survey = useSelector((state: RootState) => state.survey);
    const isSurveyComplete = Object.values(survey.survey).every(
        (value) => value !== '' && value !== null && value !== undefined
    );
    console.log(survey)

    const [uploadPictures] = useUploadPicturesMutation();
    const [uploadSurvey] = useUploadSurveyMutation();

    const handleNextBtnClick = async () => {
        const formData = new FormData();
        filesList?.forEach(({ file }) => {
            formData.append('files', file);
        });
        try {
            await uploadPictures(formData).unwrap();
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Ошибка при загрузке файлов', error);
        }
    }

    const handleCheckResultsBtnCLick = async () => {
        try {
            await uploadSurvey(survey);
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Ошибка при загрузке опроса', error)
        }
    }

    return (
        <div className={styles.footer}>
            <p className={styles.step}>Шаг {currentStep}/{3}</p>

            {currentStep === 1 && (
                <NextButton
                    disabled={!allUploaded}
                    onClick={handleNextBtnClick}
                />
            )}

            {currentStep === 2 && (
                <div className={styles.buttonBox}>
                    <ToPicturesButton
                        onClick={() => setCurrentStep(prev => prev - 1)}
                    />
                    <CheckResultsButton
                        disabled={!isSurveyComplete}
                        onClick={handleCheckResultsBtnCLick}
                    />
                </div>
            )}
        </div>
    );
}

export default PicturePageFooter;