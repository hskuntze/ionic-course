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
        <IonToolbar color="dark">
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

/**
 * * Para usar o Capacitor:
 * 
 * 1. Core Javascript runtime: npm install @capacitor/core
 * 2. Capacitor Command Line Interface: npm install @capacitor/cli --save-dev
 * 3. npx cap init / npx capacitor init
 * 4. Responder as perguntas: nome do aplicativo, domínio da aplicação
 * 5. Plugins do Capacitor: npm i @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
 * 6. Instalar o Android Studio na pasta "/usr/local" e criar um emulador
 * 7. Instalar a dependência do Android no projeto React: npm install @capacitor/android
 * 8. Gerar um projeto android: npx cap add android / npx capacitor add android
 * 9. Iniciar o projeto android: npx cap open android / npx capacitor open android
 * 
 * * Dentro do Android Studio:
 * 
 * 1. Pode ser preciso mudar a variável "minSdkVersion" que representa a versão da API Android
 *   1.1. Para mudar a variável devemos navegar até "Gradle Scripts" -> "variables.gradle"
 *   1.2. Mudar a variável "minSdkVersion" para a versão que escolhemos no emulador
 * 2. É possível conectar o celular para rodar o aplicativo ou iniciar o emulador
 * 
 * * Para efetuar novas mudanças manualmente e refletir no Android Studio:
 * 
 * 1. Será preciso realizar uma nova build com "npm run build"
 * 2. Além disso devemos sincronizar os projetos com "npx cap sync"
 * 3. Para garantir, no Android Studio clicaremos com o botão direito na pasta raíz e selecionaremos a opção "Reload from disk"
 * 
 * * Usando live reload com Android Studio:
 * 
 * 1. Em "capacitor.config.ts" no objeto "server" adicionar:
 *  1.1. "url": o valor será a propriedade "On Your Network" quando iniciamos o live-server (npm start)
 *  1.2. "cleartext": true, isso fará com que o Android aceite requisições HTTP
 * 2. Iniciar o servidor com "npm start"
 * 3. Por fim, no Android Studio basta iniciar o emulador
 * 
 * * Imagens de ícone e splash:
 * 
 * 1. Para mudar os ícones de uma aplicação Android ou iOS podemos usar a biblioteca do Ionic "@capacitor/assets"
 * 2. "npm install @capacitor/assets --save-dev"
 * 3. Em uma pasta "assets" na raíz do projeto devem existir duas imagens sendo logo.png e logo-dark.png
 * 4. No terminal vamos rodar o comando "npx capacitor-assets generate"
 * 5. As imagens serão automaticamente adicionadas aos projetos Android e iOS
 * 6. "npx cap sync"
 * 7. "Reload from disk" no Android
 * 8. Executar o projeto e ver as mudanças
 */