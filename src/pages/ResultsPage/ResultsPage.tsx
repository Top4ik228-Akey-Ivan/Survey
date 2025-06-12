import { useSelector } from "react-redux";
import styles from './ResultsPage.module.css';
import PicturePageFooter from "../../components/PicturePageFooter/PicturePageFooter";
import type { RootState } from "../../redux/store";
import { useEffect, useRef, useState } from "react";
import type { IResultsResponse } from "../../types";
import Spinner from "../../components/Spinner/Spinner";

interface ResultsPageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ currentStep, setCurrentStep }) => {
    const taskId = useSelector((state: RootState) => state.survey.task_id);
    const [data, setData] = useState<IResultsResponse | null>(null);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const fetchReport = async () => {
        if (!taskId) return;

        try {
            const response = await fetch(`https://sirius-draw-test-94500a1b4a2f.herokuapp.com/report/${taskId}`);
            if (!response.ok) throw new Error('Ошибка сети');
            const result: IResultsResponse = await response.json();
            setData(result);
        } catch (error) {
            console.error('Ошибка при получении отчёта:', error);
        }
    };

    useEffect(() => {
        if (!taskId) return;

        fetchReport();

        intervalRef.current = setInterval(() => {
            fetchReport();
        }, 10000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskId]);

    useEffect(() => {
        if (data && data.status !== 'в обработке' && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [data]);

    return (
        <div className='page'>
            <div className="contentContainer">

                {data?.status === 'в обработке' && (
                    <div className={styles.statusBox}>
                        <p className={styles.statusText}>Анализ в процессе...</p>
                        <Spinner />
                    </div>
                )}

                <PicturePageFooter
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
        </div>
    );
};

export default ResultsPage;
