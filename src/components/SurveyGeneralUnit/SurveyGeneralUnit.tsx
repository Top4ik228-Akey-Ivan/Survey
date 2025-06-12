import RadioButtonGroup from '../../ui/RadioButtonGroup/RadioButtonGroup';
import styles from './SurveyGeneralUnit.module.css';
import { generalUnitQuestions } from '../../constants/constants';
import Textarea from '../../ui/Textarea/Textarea';

const options = [
    'Отличное', 'Хорошее', 'Удовлетворительное', 'Неудовлетворительное', 'Очень плохое'
]

const SurveyGeneralUnit: React.FC = () => {
    return (
        <div className={styles.unit}>
            <p className={styles.title}>Раздел 5. Общие вопросы</p>
            <RadioButtonGroup
                question={{ 
                    id: 'q5_1', 
                    text: 'Как Вы оцениваете общее эмоциональное состояние вашего ребенка?' 
                }}
                options={options}
                direction='column'
            />
            {generalUnitQuestions.map((question) => 
                <Textarea
                    key={question.id}
                    id={question.id}
                    text={question.text}
                />
            )}
        </div>
    );
}

export default SurveyGeneralUnit;