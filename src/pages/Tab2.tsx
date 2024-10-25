import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css';
import './Tab2.css';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [resultado, setResultado] = useState({ x1: 0, x2: 0, i: 0 });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const a = parseInt(e.target[0].value);
    const b = parseInt(e.target[1].value);
    const c = parseInt(e.target[2].value);
    calcular(a, b, c);
  }


  const calcular = (a: number, b: number, c: number) => {
    const discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante > 0) {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      setResultado({ x1, x2, i: 0 });
    } else if (discriminante === 0) {
      const x1 = -b / (2 * a);
      setResultado({ x1, x2: 0, i: 0 });
    } else {
      const x1 = -b / (2 * a);
      const i = Math.sqrt(-discriminante) / (2 * a);
      setResultado({ x1, x2: 0, i });
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora de ecuaciones cuadráticas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding ecuacion'>
        <h3>Ingrese los valores para a, b, c</h3>
        <BlockMath math="ax^2 + bx + c = 0" />
        <form className='input-ecuacion' onSubmit={handleSubmit}>
          <IonInput placeholder='a' type='number' required></IonInput>
          <IonInput placeholder='b' type='number' required></IonInput>
          <IonInput placeholder='c' type='number' required></IonInput>
          <IonButton type='submit'>Calcular</IonButton>
        </form>
        <h3>Resultado</h3>
        <BlockMath math={`x_1 = ${resultado.x1} \\quad x_2 = ${resultado.x2} \\quad i = ${resultado.i}`} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
