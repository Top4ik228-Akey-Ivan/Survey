import React from 'react';
import styles from './ProgressBar.module.css';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percent = (currentStep / totalSteps) * 100;

  const progressClassName =
    percent === 100 ? styles.progressFull : styles.progressPartial;

  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.progressBar}>
        <div
          className={progressClassName}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
