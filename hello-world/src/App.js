import "./App.css";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToast,
  IonToolbar,
  setupIonicReact,
  useIonToast,
} from "@ionic/react";
import { arrowForward as arrowIcon } from "ionicons/icons";
import { useRef } from "react";

/**
 *  O setup mínimo para que o Ionic funcione é:
 *
 * import "@ionic/react/css/core.css";
 * setupIonicReact();
 *
 *  Esse setup é interessante para aplicações web, mas se quisermos criar
 * um aplicativo mobile e que se pareça com uma aplicação nativa teremos
 * de fazer mais importações:
 *
 * import "@ionic/react/css/core.css";
 *
 */

/* Core CSS para componentes Ionic: */
import "@ionic/react/css/core.css";

/* CSS básico para aplicações feitas com Ionic: */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* CSS opcional */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Estilos customizados */
import "./assets/themes/vars.css";

setupIonicReact();

/**
 *  Obs.: se quisermos sobreescrever um tema do Ionic podemos fazê-lo como
 * no arquivo "vars.css", onde o próprio website do Ionic nos providencia
 * todas as variáveis necessárias (são 6 variáveis) para sobreescrever de-
 * termindo tema. No arquivo sobreescrevi o tema primário.
 *
 *! Obs. 2: para que a sobreescrita das variáveis funcionem é FUNDAMENTAL
 *! que a importação do arquivo de variáveis aconteça depois de importar
 *! o "core.css" do Ionic!
 *
 * * https://ionicframework.com/docs/theming/color-generator
 *
 *  Além disso é possível customizar todas as variáveis do Ionic, por exemplo
 * as fontes e seu tamanho e pesos, a cor de texto para iOS ou para Android
 * especificamente etc.
 */

/**
 *  A função "setupIonicReact()" é chamada fora do escopo de "App"
 * portanto só será invocada uma única vez quando o módulo carregar.
 */

/**
 *  O Ionic é capaz de mudar o estilo CSS baseado na plataforma em que
 * é carregado, ou seja, para o iOS existe um estilo e para o Android
 * existe outro. Isso se chama "adaptive styling". Podemos deixar ex-
 * plícito que o estilo deve ser o do Material Design (nativo para Android)
 * ou que deve ser da Apple:
 *
 * setupIonicReact({
 *   mode: 'md',
 * });
 *
 *  É interessante deixar que o Ionic escolha o estilo reduzindo o tra-
 * balho do desenvolvedor.
 */

function App() {
  const refs = useRef(null);
  const [showToast] = useIonToast();

  const handleClick = () => {
    showToast({
      message: "Hey!",
      duration: 700,
      color: "secondary",
    });
  };
  /**
   *  Para construir uma aplicação web podemos deixar os elementos de HTML
   * como <main>, <header>, <footer> etc., mas quando se trata de construir
   * uma aplicação para Android ou iOS devemos usar o elemento <IonApp>, bem
   * como os elementos <IonHeader>, <IonContent> e assim subsequentemente.
   */

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle ref={refs}>Olá</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton
          onClick={() =>
            refs.current.style.color === "red"
              ? (refs.current.style.color = "white")
              : (refs.current.style.color = "red")
          }
        >
          Click to change the color!
        </IonButton>
        {/**
         *  Os elementos do Ionic são totalmente customizáveis e se parecem muito com o Bootstrap
         * no que diz respeito as propriedades, mas ainda mais customizáveis que ele.
         *
         *  Para utilizar ícones baixamos o pacote "ionicons" e em seguida podemos importar qualquer
         * ícone do Ionic. É possível ver os ícones em https://ionic.io/ionicons. O elemento IonIcon
         * aceita dois parâmetros principais: "icon" e "slot" onde, respectivamente, representa o ícone
         * a ser exibido e a posição em que será exibido. Além disso, como é muito customizável, podemos
         * definir tamanho, cor, elementos de acessibilidade etc.
         */}

        <IonButton color="dark" shape="round" id="show-toast">
          <IonIcon icon={arrowIcon} slot="start" size="small" />
          Click me to show a toast on the bottom of the screen
        </IonButton>

        <IonToast
          color={"dark"}
          trigger="show-toast"
          message={"Oh, look! A toast!!!"}
          duration={1000}
        ></IonToast>

        <IonButton onClick={handleClick}>
          Click me to show a toast on the bottom of the screen
        </IonButton>

      </IonContent>
    </IonApp>
  );
}

export default App;
