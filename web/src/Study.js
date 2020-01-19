import React, { useState } from 'react';
import Header from './Header';

// Componente: Bloco isolado de HTML, CSS, e JS, o qual não interfere no restante da aplicação.
// Propriedade: Informações que um componente pai passa para o componente filho.
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade)

function App() {

  const [ counter, setCounter ] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>contador: { counter }</h1>
      <button onClick={ incrementCounter }>incrementar</button>
    </>
  );
}

export default App;
