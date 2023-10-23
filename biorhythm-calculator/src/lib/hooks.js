import { useState } from "react";

export function useStoredState(key, defaultState) {
    /**
     *  Essa função fica responsável por adquirir o estado inicial, ou nesse caso,
     * o estado padrão. Ela é passada como argumento do "useState" para que o hook
     * seja iniciado com algum valor.
     * 
     *  * '??' = nullish coalesce operator -> caso 'primeiro valor' seja nulo, use 'segundo valor'...
     * 
     *  Aqui no nosso caso o hook lerá o valor armazenado no localStorage quando 
     * for inicializado, e se não houver valor será usado o "defaultState"!
     */
    function getInitialState() {
        const stored = localStorage.getItem(key);
        return stored ?? defaultState;
    }

    const [state, setState] = useState(getInitialState);

    function setAndStoreState(state) { 
        setState(state);
        localStorage.setItem(key, state);
    }

    /**
     *  Estamos passando a função "setAndStoreState" como segundo parâmetro do array
     * por que dessa forma quando o "setBirthDate" for invocado no App.js a função
     * correspondente será a "setAndStoreState".
     *  
     *  É necessário ter em mente que esse custom hook é criado como um "useState"
     * recebendo um array como parâmetro:
     * *        const [algo, setAlgo] = useStoredState('key', 'value');
     *  Aqui, por debaixo dos panos, o equivalente é [state, setAndStoreState].
     * Assim, cada chamada de "setAlgo" será o equivalente a chamar "setAndStoreState" :D
     */
    return [state, setAndStoreState];
}