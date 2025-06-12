import type { PictureFile } from "../../pages/PicturePage/PicturePage";
import PictureCard from "../PictureCard/PictureCard";
import styles from './PictureCardsList.module.css';

const pictures: { id: number, text: string }[] = [
    { id: 1, text: 'Дом, дерево, человек' },
    { id: 2, text: 'Несуществующее животное' },
    { id: 3, text: 'Автопортрет' },
]

interface PictureCardsListProps {
    setFilesList: React.Dispatch<React.SetStateAction<PictureFile[]>>;
}

const PictureCardsList: React.FC<PictureCardsListProps> = ({ setFilesList }) => {

    return (
        <div className={styles.list}>
            {pictures.map((card) => (
                <PictureCard
                    setFilesList={setFilesList}
                    key={card.id}
                    id={card.id}
                    text={card.text}
                />
            ))}
        </div>
    );
};


export default PictureCardsList;