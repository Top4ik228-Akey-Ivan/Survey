import React, { useRef } from 'react';
import styles from './PictureCard.module.css';
import upload from '../../assets/icons/Upload.svg';
import reload from '../../assets/icons/Reload.svg';
import { setPicture } from '../../redux/slices/pictureSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import type { PictureFile } from '../../pages/PicturePage/PicturePage';

interface PictureCardProps {
    text: string;
    id: number;
    setFilesList: React.Dispatch<React.SetStateAction<PictureFile[]>>;
}



const PictureCard: React.FC<PictureCardProps> = ({ text, id, setFilesList }) => {
    const dispatch: AppDispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const previewUrl = useSelector((state: RootState) => {
        const picture = state.pictures.uploadedPictures.find(p => p.id === id);
        return picture ? picture.url : undefined;
    });


    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        dispatch(setPicture({ id, url }));

        setFilesList((prevFilesList) => {
            const existingIndex = prevFilesList.findIndex(f => f.id === id);

            if (existingIndex !== -1) {
                // Обновляем существующий файл
                const newFilesList = [...prevFilesList];
                newFilesList[existingIndex] = { id, file };
                return newFilesList;
            } else {
                // Добавляем новый файл
                return [...prevFilesList, { id, file }];
            }
        });
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
