import PictureCardsList from "../../components/PictureCardsList/PictureCardsList";
import PicturePageHeader from "../../components/PicturePageHeader/PicturePageHeader";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";

export interface PictureFile {
    id: number;
    file: File;
}

interface PicturePageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
    filesList: PictureFile[];
    setFilesList: React.Dispatch<React.SetStateAction<PictureFile[]>>;
}

const PicturePage: React.FC<PicturePageProps> = ({
    currentStep, setCurrentStep, filesList, setFilesList
}) => {

    return (
        <div className='page'>
            <div className="contentContainer">
                <div>
                    <PicturePageHeader />
                    <PictureCardsList
                        setFilesList={setFilesList}
                    />
                </div>
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