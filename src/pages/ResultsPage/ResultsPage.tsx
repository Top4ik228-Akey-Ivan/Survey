import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";

interface ResultsPageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ currentStep, setCurrentStep }) => {
    return (
        <div className='page'>
            <div className="contentContainer">
                <PicturePageFooter
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
        </div>
    );
}

export default ResultsPage;