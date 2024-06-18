import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { userAuthentication } from '../../hooks/userAuthentication';
import styles from './PerfilLeitor.module.css';
import { CameraFill } from 'react-bootstrap-icons';

const PerfilLeitor = () => {
    const { user } = useAuthValue();
    const { logout } = userAuthentication();
    const navigate = useNavigate();
    const [favoriteNews, setFavoriteNews] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else {
            setFavoriteNews([
                { id: 1, title: "Notícia 1", imageUrl: "https://via.placeholder.com/150" },
                { id: 2, title: "Notícia 2", imageUrl: "https://via.placeholder.com/150" },
                { id: 3, title: "Notícia 3", imageUrl: "https://via.placeholder.com/150" },
                { id: 4, title: "Notícia 4", imageUrl: "https://via.placeholder.com/150" },
                { id: 5, title: "Notícia 5", imageUrl: "https://via.placeholder.com/150" },
                { id: 6, title: "Notícia 6", imageUrl: "https://via.placeholder.com/150" },
                { id: 7, title: "Notícia 7", imageUrl: "https://via.placeholder.com/150" },
                { id: 8, title: "Notícia 8", imageUrl: "https://via.placeholder.com/150" },
                { id: 9, title: "Notícia 9", imageUrl: "https://via.placeholder.com/150" },
                { id: 10, title: "Notícia 10", imageUrl: "https://via.placeholder.com/150" }
            ]);
        }
    }, [user, navigate]);

    const handleEditProfile = () => {
        console.log('Edit profile');
    };

    const handleAddPhoto = () => {
        console.log('Add photo');
    };

    return (
        <div className={styles.perfilLeitorContainer}>
            <h1 className={styles.title}>Perfil de Leitor</h1>
            {user && (
                <div className={styles.userInfo}>
                    <div className={styles.userImageContainer}>
                        <div className={styles.userImage}>
                            <img src={user.profileImage} className={styles.userPhoto} alt="Foto de Perfil" />
                            <div className={styles.editPhotoOverlay}>
                                <CameraFill className={styles.userImageIcon} />
                                <p className={styles.addPhotoText} onClick={handleAddPhoto}>Alterar Foto</p>
                            </div>
                        </div>
                        <p className={styles.userName}>{user.name}</p>
                        <p>Sophia Icoma Tavares</p>
                        <p>19 anos</p>
                        <p>Araraquara, São Paulo, Brasil</p>
                        <button onClick={handleEditProfile} className={styles.editProfileButton}>Editar Perfil</button>
                        <button onClick={logout} className={styles.logoutButton}>LogOut</button>
                    </div>
                </div>
            )}
            <div className={styles.favoriteNewsSection}>
                <h2 className={styles.sectionTitle}>Notícias Favoritadas</h2>
                <ul className={styles.favoriteNewsList}>
                    {favoriteNews.map(news => (
                        <li key={news.id} className={styles.favoriteNewsItem}>
                            <div className={styles.newsImage}>
                                <img src={news.imageUrl} alt="Imagem da Notícia" className={styles.newsPhoto} />
                            </div>
                            <div className={styles.newsContent}>
                                <h3 className={styles.newsTitle}>{news.title}</h3>
                                <button className={styles.unfavoriteButton}>
                                    <span className={styles.starIcon}>&#9734;</span> Desfavoritar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PerfilLeitor;
