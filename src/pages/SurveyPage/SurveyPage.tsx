import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SurveyMainInfo from "../../components/SurveyMainInfo/SurveyMainInfo";
import SurveyRadioUnit from "../../components/SurveyRadioUnit/SurveyRadioUnit";
import WarningMessage from "../../components/WarningMessage/WarningMessage";
import styles from './SurveyPage.module.css';

import { units } from "../../components/constants/constants";

const SurveyPage: React.FC = () => {
    return (
        <div className='page'>
            <ProgressBar currentStep={2} totalSteps={3} />

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

            </div>
        </div>
    );
}

export default SurveyPage;