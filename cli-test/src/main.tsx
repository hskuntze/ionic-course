import { SplashScreen } from "@capacitor/splash-screen";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/**
 * Um dos primeiros passos é adicionar a dependência @capacitor/splash-screen
 * e executar o comando abaixo "SplashScreen.hide()". Isso faz com que a splash
 * screen não seja exibida mais do que o necessário.
 * 
 * Obs.: deve ser chamado após a instanciação/renderização do 'root';
 */

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

SplashScreen.hide();