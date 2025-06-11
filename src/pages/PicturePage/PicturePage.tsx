import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from './PicturePage.module.css';
import PictureCardsList from "../../components/PictureCardsList/PictureCardsList";
import PicturePageHeader from "../../components/PicturePageHeader/PicturePageHeader";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";
import { useState } from "react";

const PicturePage: React.FC = () => {
    const [uploadedImages, setUploadedImages] = useState<{ [id: number]: boolean }>({});

    const handleImageUpload = (id: number, uploaded: boolean) => {
        setUploadedImages((prev) => ({ ...prev, [id]: uploaded }));
    };

    const allUploaded = [1, 2, 3].every((id) => uploadedImages[id]);

    return (
        <div className={styles.page}>
            <ProgressBar currentStep={1} totalSteps={3} />

            <div className="contentContainer">
                <PicturePageHeader />
                <PictureCardsList onImageUpload={handleImageUpload} />
                <PicturePageFooter currentStep={1} totalSteps={3} disabled={!allUploaded} />
            </div>
        </div>
    );
};


export default PicturePage;