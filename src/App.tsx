import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png'

import {levels, calculateImc} from './helpers/imc'

const App = () => {

const [altura, setAltura] = useState(0);
const [peso, setPeso]     = useState(0);

const hanbleCalc = () => {
if (altura && peso) {

 }
else {
  alert("Informe a Altura e o Peso")
 }
}

return(
  <div className={styles.main}>
    <header>
  <div className={styles.headerContainer}>
    <img src={poweredImage} alt="" width={150} />
  </div>
    </header>
  <div className={styles.container}>
  <div className={styles.leftSlide}>
    <h1>Calculo do IMC</h1>
    <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
        O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
    <input
  type="number"
  placeholder="Informe a altura. Ex 1.5 (em metro)"
  value={altura > 0 ? altura:''}
  onChange={t => setAltura(parseFloat(t.target.value) )}
  />

    <input
  type="number"
  placeholder="Informe a peso. Ex 1.5 (em kilo)"
  value={peso > 0 ? peso:''}
  onChange={t => setAltura(parseFloat(t.target.value) )}
  />

    <button onClick={hanbleCalc}>Calcular</button>

  </div>

  <div className={styles.rightSlide}>
    <div className={styles.grid}>
      {levels.map( (item, key) => (
        <div key={key}>{item.title}</div>
      ))}
       </div>
      </div>
    </div>
  </div>
  )
}

export default App;