import PictureCardsList from "../../components/PictureCardsList/PictureCardsList";
import PicturePageHeader from "../../components/PicturePageHeader/PicturePageHeader";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";
import { useState } from "react";

export interface PictureFile {
    id: number;
    file: File;
}

interface PicturePageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
}

const PicturePage: React.FC<PicturePageProps> = ({ currentStep, setCurrentStep }) => {
    const [filesList, setFilesList] = useState<PictureFile[]>([]);

    return (
        <div className='page'>
            <div className="contentContainer">
                <PicturePageHeader />
                <PictureCardsList
                    setFilesList={setFilesList}
                />
                <PicturePageFooter
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    filesList={filesList}
                />
            </div>
        </div>
    );
};


export default PicturePage;