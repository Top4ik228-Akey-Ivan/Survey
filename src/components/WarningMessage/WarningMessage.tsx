import styles from './WarningMessage.module.css';
import hand from '../../assets/icons/Hand.svg';
import flag from '../../assets/icons/Flag.svg';

const WarningMessage: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.line}>
                <img src={hand} alt="" />
                <p>
                    Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.
                </p>
            </div>
            <div className={styles.line}>
                <img src={flag} alt="" />
                <p>Все вопросы обязательны к заполнению</p>
            </div>
        </div>
    );
}

export default WarningMessage;