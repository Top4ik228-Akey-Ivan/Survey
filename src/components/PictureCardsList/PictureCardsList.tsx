import PictureCard from "../PictureCard/PictureCard";
import styles from './PictureCardsList.module.css';

const pictures: {id: number, text: string}[] = [
    {id: 1, text: 'Дом, дерево, человек'},
    {id: 2, text: 'Несуществующее животное'},
    {id: 3, text: 'Автопортрет'},  
]

const PictureCardsList: React.FC = () => {
    return (
        <div className={styles.list}>
            {pictures.map((card) => <PictureCard key={card.id} text={card.text}/>)}
        </div>
    );
}
 
export default PictureCardsList;