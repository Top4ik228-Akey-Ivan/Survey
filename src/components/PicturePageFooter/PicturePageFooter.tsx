import { useSelector } from 'react-redux';
import type { PictureFile } from '../../pages/PicturePage/PicturePage';
import { useUploadPicturesMutation } from '../../redux/services/picturesApi';
import { useUploadSurveyMutation } from '../../redux/services/surveyApi';
import CheckResultsButton from '../../ui/CheckResultsButton/CheckResultsButton';
import NextButton from '../../ui/NextButton/NextButton';
import ToPicturesButton from '../../ui/ToPicturesButton/ToPicturesButton';
import styles from './PicturePageFooter.module.css';
import type { RootState } from '../../redux/store';
import type { ISurveyUpload } from '../../types';
import { useDispatch } from 'react-redux';
import { setTaskId } from '../../redux/slices/surveySlice';
import DownloadButton from '../../ui/DownloadButton/DownloadButton';
import ShareButton from '../../ui/ShareButton/ShareButton';

interface PicturePageFooterProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    filesList?: PictureFile[];
}

const PicturePageFooter: React.FC<PicturePageFooterProps> = ({
    currentStep, setCurrentStep, filesList
}) => {
    const dispatch = useDispatch();

    const uploadedPictures = useSelector((state: RootState) => state.pictures.uploadedPictures)
    const allUploaded = [1, 2, 3].every((id) =>
        uploadedPictures.some(picture => picture.id === id)
    );

    const survey = useSelector((state: RootState) => state.survey);
    const isSurveyComplete = Object.values(survey.survey).every(
        (value) => value !== '' && value !== null && value !== undefined
    );

    const [uploadPictures] = useUploadPicturesMutation();
    const [uploadSurvey] = useUploadSurveyMutation();

    const handleNextBtnClick = async () => {
        const formData = new FormData();
        filesList?.forEach(({ file }) => {
            formData.append('files', file);
        });
        try {
            const response = await uploadPictures(formData).unwrap();
            dispatch(setTaskId(response.task_id));
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Ошибка при загрузке файлов', error);
        }
    }

    const handleCheckResultsBtnCLick = async () => {
        try {
            const requiredSurveyFields = [
                'childName', 'childDOB', 'childGender', 'parentName', 'emotionalState',
                ...Array.from({ length: 10 }, (_, i) => `q1_${i + 1}`),
                ...Array.from({ length: 10 }, (_, i) => `q2_${i + 1}`),
                ...Array.from({ length: 10 }, (_, i) => `q3_${i + 1}`),
                ...Array.from({ length: 10 }, (_, i) => `q4_${i + 1}`),
                ...Array.from({ length: 5 }, (_, i) => `q5_${i + 1}`),
            ];

            const surveyPayload = requiredSurveyFields.reduce((acc, key) => {
                acc[key as keyof ISurveyUpload['survey']] = survey.survey[key] || '';
                return acc;
            }, {} as ISurveyUpload['survey']);


            const payload: ISurveyUpload = {
                task_id: survey.task_id,
                survey: {
                    ...surveyPayload,
                    childGender: survey.survey.childGender,
                }
            };

            await uploadSurvey(payload);
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Ошибка при загрузке опроса', error);
        }
    };


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

            {currentStep === 3 && (
                <div className={styles.buttonBox}>
                    <DownloadButton/>
                    <ShareButton/>
                </div>
            )}
        </div>
    );
}

export default PicturePageFooter;