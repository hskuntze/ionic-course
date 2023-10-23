import {
  IonApp,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import Card from "./components/Card";
import { useStoredState } from "./lib/hooks";

function today() {
  return new Date().toISOString().slice(0, "yyyy-mm-dd".length);
}

function App() {
  const [birthDate, setBirthDate] = useStoredState('birthDate', '');
  const [targetDate, setTargetDate] = useState(today());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/**
         *  Se utilizarmos um componente de input do Ionic, deveremos nos atentar aos métodos
         * do componente. Se tentarmos usar "onChange" em um elemento "IonInput" o método não
         * funcionará. É preciso usar o "onIonChange". Se fosse um "input" comum, então o
         * "onChange" funcionaria. Aqui também tem a diferença entre "e.target" e "e.detail",
         * sendo o primeiro nativo do JS e o segundo do Ionic.
         *
         * Exemplo de um formulário com a estrutura padrão do Ionic: IonList -> IonItem -> IonInput
          <IonList>
            <IonItem>
              <IonInput
                label="Date of birth:"
                labelPlacement="stacked"
                placeholder="Enter your date of birth..."
                value={birthDate}
                onIonChange={(e) => setBirthDate(e.detail.value)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonInput
                label="Target date:"
                labelPlacement="stacked"
                placeholder="Enter your target date..."
                value={targetDate}
                onIonChange={(e) => setTargetDate(e.detail.value)}
              ></IonInput>
            </IonItem>
          </IonList> */}

        <IonList>
          <IonItem>
            <IonInput
              label="Birth date:"
              labelPlacement="fixed"
              type="date"
              value={birthDate}
              id="birth-date-input"
              onIonChange={(e) => setBirthDate(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Target date:"
              labelPlacement="fixed"
              type="date"
              value={targetDate}
              id="target-date-input"
              onIonChange={(e) => setTargetDate(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonList>
        {Boolean(birthDate) && (
          <Card birthDate={birthDate} targetDate={targetDate} />
        )}
      </IonContent>
    </IonApp>
  );
}

export default App;
