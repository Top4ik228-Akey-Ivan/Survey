import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import PicturePage from './pages/PicturePage/PicturePage';
import SurveyPage from './pages/SurveyPage/SurveyPage';

function App() {

    const [currentStep, setCurrentStep] = useState<number>(2);

    return (
        <div className='container'>
            <ProgressBar currentStep={currentStep} totalSteps={3} />

            {currentStep === 1 &&
                (<PicturePage
                    setCurrentStep={setCurrentStep}
                    currentStep={currentStep}
                />)}

            {currentStep === 2 &&
                (<SurveyPage
                    setCurrentStep={setCurrentStep}
                    currentStep={currentStep}
                />)}

            {currentStep === 3 && <p>Еще рано</p>}
        </div>
    )
}

export default App
