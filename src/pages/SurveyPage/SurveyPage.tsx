import SurveyMainInfo from "../../components/SurveyMainInfo/SurveyMainInfo";
import SurveyRadioUnit from "../../components/SurveyRadioUnit/SurveyRadioUnit";
import WarningMessage from "../../components/WarningMessage/WarningMessage";
import styles from './SurveyPage.module.css';

import { units } from "../../constants/constants";
import SurveyGeneralUnit from "../../components/SurveyGeneralUnit/SurveyGeneralUnit";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface SurveyPageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
}

const SurveyPage: React.FC<SurveyPageProps> = ({ setCurrentStep, currentStep }) => {
    const survey = useSelector((state: RootState) => state.survey)
    console.log(survey)

    return (
        <div className='page'>
            <div className={`contentContainer ${styles.pageContent}`}>
                <SurveyMainInfo />
                <WarningMessage />

                {units.map((unit) =>
                    <SurveyRadioUnit
                        key={unit.id}
                        unitTitle={unit.unitTitle}
                        questions={unit.questions}
                    />
                )}

                <SurveyGeneralUnit />
                <PicturePageFooter
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
        </div>
    );
}

export default SurveyPage;