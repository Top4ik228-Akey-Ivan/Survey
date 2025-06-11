import type { IQuestion } from '../../types';
import RadioButtonGroup from '../../ui/RadioButtonGroup/RadioButtonGroup';
import styles from './SurveyRadioUnit.module.css';

interface SurveyRadioUnitProps {
    unitTitle: string;
    questions: IQuestion[];
}

const options = ['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']

const SurveyRadioUnit: React.FC<SurveyRadioUnitProps> = ({unitTitle, questions}) => {
    return (
        <div>
            <p className={styles.title}>{unitTitle}</p>
            <div className={styles.radioBox}>
                {questions.map((question) => 
                    <RadioButtonGroup key={question.id} question={question} options={options}/>
                )}
            </div>
        </div>
    );
}
 
export default SurveyRadioUnit;