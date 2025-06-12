import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import PicturePage, { type PictureFile } from './pages/PicturePage/PicturePage';
import SurveyPage from './pages/SurveyPage/SurveyPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {

    const [currentStep, setCurrentStep] = useState<number>(2);
    const [filesList, setFilesList] = useState<PictureFile[]>([]);

    return (
        <div className='container'>
            <ProgressBar currentStep={currentStep} totalSteps={3} />

            {currentStep === 1 &&
                (<PicturePage
                    setCurrentStep={setCurrentStep}
                    currentStep={currentStep}
                    filesList={filesList}
                    setFilesList={setFilesList}
                />)}

            {currentStep === 2 &&
                (<SurveyPage
                    setCurrentStep={setCurrentStep}
                    currentStep={currentStep}
                />)}

            {currentStep === 3 &&
                (<ResultsPage
                    setCurrentStep={setCurrentStep}
                    currentStep={currentStep}
                />)}
        </div>
    )
}

export default App
