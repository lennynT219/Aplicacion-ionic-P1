import { useState } from 'react';
import { IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonModal, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [date1, setDate1] = useState<string | null>(null);
  const [date2, setDate2] = useState<string | null>(null);
  const [daysDifference, setDaysDifference] = useState<number | null>(null);

  const calculateDaysDifference = () => {
    if (date1 && date2) {
      const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysDifference(diffDays);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Seleccionar Fechas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding dias-entre'>
        <h3>Ingrese las fechas</h3>
        <div className='container-date'>
          <h4>Desde</h4>
          <IonDatetimeButton datetime="datetime1"></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime1" onIonChange={e => setDate1(e.detail.value!)}></IonDatetime>
          </IonModal>
          <h4>Hasta</h4>
          <IonDatetimeButton datetime="datetime2"></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime2" onIonChange={e => setDate2(e.detail.value!)}></IonDatetime>
          </IonModal>
        </div>
        <IonButton onClick={calculateDaysDifference}>Calcular Diferencia de Días</IonButton>
        {daysDifference !== null && (
          <h4>Diferencia de días: {daysDifference}</h4>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
