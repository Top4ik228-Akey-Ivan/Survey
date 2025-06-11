import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SurveyMainInfo from "../../components/SurveyMainInfo/SurveyMainInfo";

const SurveyPage: React.FC = () => {
    return (
        <div className='page'>
            <ProgressBar currentStep={2} totalSteps={3}/>

            <div className='contentContainer'>
                <SurveyMainInfo/>
            </div>
        </div>
    );
}
 
export default SurveyPage;