import styles from './PictureCard.module.css';
import upload from '../../assets/icons/Upload.svg'
// import reload from '../../assets/icons/Reload.svg'

interface PictureCardProps {
    text: string;
}

const PictureCard: React.FC<PictureCardProps> = ({text}) => {
    return (  
        <div className={styles.card}>
            <div className={styles.pictureBox}>
                <div className={styles.iconBox}>
                    <img src={upload} alt="" />
                </div>
            </div>
            <p className={styles.desc}>{text}</p>
        </div>
    );
}
 
export default PictureCard;