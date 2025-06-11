import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from './PicturePage.module.css';
import PictureCardsList from "../../components/PictureCardsList/PictureCardsList";
import PicturePageHeader from "../../components/PicturePageHeader/PicturePageHeader";
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";

const PicturePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <ProgressBar currentStep={1} totalSteps={3} />

            <div className='contentContainer'>
                <PicturePageHeader/>
                <PictureCardsList/>
                <PicturePageFooter/>
            </div>
        </div>
    );
}

export default PicturePage;