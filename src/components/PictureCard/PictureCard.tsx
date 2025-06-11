import React, { useRef, useState } from 'react';
import styles from './PictureCard.module.css';
import upload from '../../assets/icons/Upload.svg';
import reload from '../../assets/icons/Reload.svg';

interface PictureCardProps {
    text: string;
    id: number;
    onUpload: (id: number, uploaded: boolean) => void;
}

const PictureCard: React.FC<PictureCardProps> = ({ text, id, onUpload }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            onUpload(id, true);
        }
    };

    return (
        <div className={styles.card}>
            <div
                className={styles.pictureBox}
                onClick={handleIconClick}
                style={{
                    backgroundImage: previewUrl ? `url(${previewUrl})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: previewUrl ? 'transparent' : '#F6F6F8',
                    cursor: 'pointer',
                }}
            >
                <div className={styles.iconBox}>
                    <img src={previewUrl ? reload : upload} alt="" />
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            <p className={styles.desc}>{text}</p>
        </div>
    );
};


export default PictureCard;
