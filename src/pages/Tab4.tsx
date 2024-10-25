import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Foto y Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <div className='container'>
          <a href="https://github.com/lennynT219/Aplicacion-ionic-P1.git" target="_blank" rel="noopener noreferrer" className='github-link'>
            <img src="lm.jpg" alt="Mi Foto" className='profile-photo' />
          </a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
