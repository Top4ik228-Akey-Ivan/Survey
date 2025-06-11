import PictureCard from "../PictureCard/PictureCard";
import styles from './PictureCardsList.module.css';

const pictures: { id: number, text: string }[] = [
    { id: 1, text: 'Дом, дерево, человек' },
    { id: 2, text: 'Несуществующее животное' },
    { id: 3, text: 'Автопортрет' },
]

interface PictureCardsListProps {
    onImageUpload: (id: number, uploaded: boolean) => void;
}


const PictureCardsList: React.FC<PictureCardsListProps> = ({ onImageUpload }) => {
    return (
        <div className={styles.list}>
            {pictures.map((card) => (
                <PictureCard
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    onUpload={onImageUpload}
                />
            ))}
        </div>
    );
};


export default PictureCardsList;