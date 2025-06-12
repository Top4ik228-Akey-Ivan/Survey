import DataPicker from '../../ui/DataPicker/DataPicker';
import Input from '../../ui/Input/Input';
import RadioButtonGroup from '../../ui/RadioButtonGroup/RadioButtonGroup';
import styles from './SurveyMainInfo.module.css';

const SurveyMainInfo: React.FC = () => {
    return (
        <div>
            <p className={styles.title}>Общая информация о ребенке</p>
            <div className={styles.inputBox}>
                <Input id='childName' text='Имя ребенка' />
                <DataPicker id='childDOB' text='Дата рождения ребенка'/>
                <RadioButtonGroup 
                    question={{id: 'childGender', text: 'Пол ребенка'}} 
                    options={['Мужской', 'Женский']}
                    direction='inline'
                />
                <Input id='parentName' text='Имя родителя, заполняющего анкету'/>
            </div>
        </div>
    );
}

export default SurveyMainInfo;