import DataPicker from '../../ui/DataPicker/DataPicker';
import Input from '../../ui/Input/Input';
import RadioButtonGroup from '../../ui/RadioButtonGroup/RadioButtonGroup';
import styles from './SurveyMainInfo.module.css';

const SurveyMainInfo: React.FC = () => {
    return (
        <div>
            <p className={styles.title}>Общая информация о ребенке</p>
            <div className={styles.inputBox}>
                <Input text='Имя ребенка' />
                <DataPicker text='Дата рождения ребенка'/>
                <RadioButtonGroup 
                    question='Пол ребенка' 
                    options={['Мужской', 'Женский']}
                    onChange={(value) => console.log(value)}
                />
                <Input text='Имя родителя, заполняющего анкету'/>
            </div>
        </div>
    );
}

export default SurveyMainInfo;