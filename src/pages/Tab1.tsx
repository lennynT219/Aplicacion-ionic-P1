import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonAvatar, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonModal, IonPopover, IonReorderGroup, IonReorder, ItemReorderEventDetail } from '@ionic/react';
import { personCircleOutline, reorderThreeOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPopover, setShowPopover] = useState(false);


  const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    event.detail.complete();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biografía del Autor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Lenin Masapanta</IonCardTitle>
            <IonCardSubtitle>Desarrolador de software</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonAvatar>
              <img src="lm.jpg" alt="Avatar" />
            </IonAvatar>
            <IonList>
              <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
                <IonItem>
                  <IonLabel>
                    <h2>Educación</h2>
                    <p>Tecnología en desarrollado de software</p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Experiencia</h2>
                    <p> He realizado proyectos de desarrollo de software en mi Universidad y desarrolle un sistema de nomina para una Cooperativa </p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Habilidades</h2>
                    <p>JavaScript, TypeScript, React, Ionic, Node.js, Astro, Java, C#</p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Intereses</h2>
                    <p>Inteligencia Artificial, Desarrolado web, Deporte, Cocina</p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Contacto</h2>
                    <p>Email: lennynvega35@gmail.com</p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Ubicación</h2>
                    <p>Quito, La Floresta</p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Idiomas</h2>
                    <p>Inglés, Español</p>
                  </IonLabel>
                  <IonReorder slot="end">
                    <IonIcon icon={reorderThreeOutline} />
                  </IonReorder>
                </IonItem>
              </IonReorderGroup>
            </IonList>
            <IonButton expand="full" color="primary" onClick={() => setShowModal(true)}>
              <IonIcon slot="start" icon={personCircleOutline} />
              Contactar
            </IonButton>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Contacto</IonTitle>
                  <IonButton slot="end" onClick={() => setShowModal(false)}>Cerrar</IonButton>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <p>Email: lennynvega35@gmail.com</p>
              </IonContent>
            </IonModal>
            <IonButton expand="full" color="secondary" onClick={(e) => setShowPopover(true)}>
              Más Información
            </IonButton>
            <IonPopover isOpen={showPopover} onDidDismiss={() => setShowPopover(false)}>
              <IonContent>
                <p>Lenin Masapanta es un desarrollador apasionado por la tecnología y la innovación.</p>
              </IonContent>
            </IonPopover>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
