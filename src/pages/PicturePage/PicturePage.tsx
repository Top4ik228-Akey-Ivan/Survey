import PictureCardsList from "../../components/PictureCardsList/PictureCardsList";
import PicturePageHeader from "../../components/PicturePageHeader/PicturePageHeader";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
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

    const uploadedPictures = useSelector((state: RootState) => state.pictures.uploadedPictures)
    console.log(filesList)
    const allUploaded = [1, 2, 3].every((id) =>
        uploadedPictures.some(picture => picture.id === id)
    );

    return (
        <div className='page'>
            <div className="contentContainer">
                <PicturePageHeader />
                <PictureCardsList
                    setFilesList={setFilesList}
                />
                <PicturePageFooter
                    currentStep={currentStep}
                    disabledFirst={!allUploaded}
                    setCurrentStep={setCurrentStep}
                    filesList={filesList}
                />
            </div>
        </div>
    );
};


export default PicturePage;