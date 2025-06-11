import PictureCardsList from "../../components/PictureCardsList/PictureCardsList";
import PicturePageHeader from "../../components/PicturePageHeader/PicturePageHeader";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";
import { useState } from "react";

interface PicturePageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
}

const PicturePage: React.FC<PicturePageProps> = ({ currentStep, setCurrentStep }) => {
    const [uploadedImages, setUploadedImages] = useState<{ [id: number]: boolean }>({});

    const handleImageUpload = (id: number, uploaded: boolean) => {
        setUploadedImages((prev) => ({ ...prev, [id]: uploaded }));
    };

    const allUploaded = [1, 2, 3].every((id) => uploadedImages[id]);

    return (
        <div className='page'>
            <div className="contentContainer">
                <PicturePageHeader />
                <PictureCardsList onImageUpload={handleImageUpload} />
                <PicturePageFooter
                    currentStep={currentStep}
                    disabledFirst={!allUploaded}
                    setCurrentStep={setCurrentStep}
                />
            </div>
        </div>
    );
};


export default PicturePage;