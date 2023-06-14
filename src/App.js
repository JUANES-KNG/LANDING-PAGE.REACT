/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Exercise1() {
  const [tableRows, setTableRows] = useState([]);

  const generateTableRows = () => {
    const rows = [];
    for (let i = 1; i <= 50; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i * i}</td>
        </tr>
      );
    }
    setTableRows(rows);
  };

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 p-1">
        <div className="col p-3 border border-secondary rounded-3">
          <p className="h2 text-info fw-light fst-italic">EXERCISE 1</p>
          <p className="lead fw-light fst-italic">
            <small>Imprimir los números del 1 al 50 cada uno con su respectivo cuadrado.</small>
          </p>
          <table className="table table-bordered mt-3 text-center bs-table-color: text-white fw-light fst-italic">
            <thead>
              <tr>
                <th>NÚMERO</th>
                <th>CUADRADO</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
          <button className="btn btn-outline-info fw-light fst-italic" onClick={generateTableRows}>
            MOSTRAR
          </button>
        </div>
      </div>
    </div>
  );
}

function Exercise2() {
  const [oddNumbers, setOddNumbers] = useState('');
  const [evenNumbers, setEvenNumbers] = useState('');

  const generateNumbers = () => {
    let oddNumbersText = '<h3>Números impares de 1 a 100: </h3>';
    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        oddNumbersText += i + ' - ';
      }
    }
    setOddNumbers(oddNumbersText);

    let evenNumbersText = '<h3><br>Números pares del 102 al 200: </h3>';
    for (let i = 102; i <= 200; i++) {
      if (i % 2 === 0) {
        evenNumbersText += i + ' - ';
      }
    }
    setEvenNumbers(evenNumbersText);
  };

  return (
    <div className="col p-3 border border-secondary rounded-3">
      <p className="h2 text-info fw-light fst-italic">EXERCISE 2</p>
      <p className="lead fw-light fst-italic">
        <small>Imprimir números impares del 1 al 100 y seguidamente los números pares del 102 al 200.</small>
      </p>
      <button className="btn btn-outline-info fw-light fst-italic" onClick={generateNumbers}>
        MOSTRAR
      </button>
      <p className="h3 fw-light fst-italic" dangerouslySetInnerHTML={{ __html: oddNumbers }}></p>
      <p className="h3 fw-light fst-italic" dangerouslySetInnerHTML={{ __html: evenNumbers }}></p>
    </div>
  );
}

function Exercise3() {
  const [inputValue, setInputValue] = useState('');
  const [descendingNumbers, setDescendingNumbers] = useState('');
  const [message, setMessage] = useState('');

  const generateDescendingNumbers = () => {
    const num = parseInt(inputValue);
    if (isNaN(num) || num <= 0) {
      setMessage('Por favor, ingrese un número válido y mayor que 0.');
      setDescendingNumbers('');
      return;
    }

    const numbers = [];
    for (let i = num; i >= 2; i--) {
      if (i % 2 === 0) {
        numbers.push(i);
      }
    }
    setMessage(`Usted ingresó el número: ${num}, los números 'PARES DESCENDENTES' partiendo desde: ${num}, son: `);
    setDescendingNumbers(numbers.join(' - '));
  };

  return (
    <div className="col p-3 border border-secondary rounded-3">
      <p className="h2 text-info fw-light fst-italic">EXERCISE 3</p>
      <p className="lead fw-light fst-italic">
        <small>Imprimir números pares en forma descendente (menores) hasta el número 2 o que sea igual al número natural dado.</small>
      </p>
      <p className="h4 fw-light fst-italic">Ingrese un número natural:</p>
      <div className="p-3">
        <input
          type="number"
          className="form-control fw-light fst-italic"
          placeholder="...."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button className="btn btn-outline-info fw-light fst-italic" onClick={generateDescendingNumbers}>
        MOSTRAR
      </button>
      <p className="h3 fw-light fst-italic" id="P3">{message}</p>
      <p className="h3 fw-light fst-italic" id="p3">{descendingNumbers}</p>
    </div>
  );
}

function Exercise4() {
  const [numInputs, setNumInputs] = useState('');
  const [numeros, setNumeros] = useState([]);
  const [numsx, setNumsx] = useState([]);
  const [sumaPonderada, setSumaPonderada] = useState(0);
  const [sumaPesos, setSumaPesos] = useState(0);
  const [resultados, setResultados] = useState({ numeros: '', numsx: '', promedioPonderado: '' });

  const generateInputs = () => {
    const n = parseInt(numInputs);
    if (isNaN(n) || n <= 0) {
      return;
    }

    const numeroInputs = [];
    const pesoInputs = [];

    for (let i = 0; i < n; i++) {
      numeroInputs.push(
        <input
          key={`numero-${i}`}
          type="number"
          className="form-control fw-light fst-italic"
          placeholder={`Número ${i + 1}`}
        />
      );

      pesoInputs.push(
        <input
          key={`peso-${i}`}
          type="number"
          className="form-control fw-light fst-italic"
          placeholder={`Peso para el número ${i + 1}`}
        />
      );
    }

    return { numeroInputs, pesoInputs };
  };

  const handleCalculate = () => {
    const numeroInputs = Array.from(document.getElementById('numeros-inputs').querySelectorAll('input'));
    const pesoInputs = Array.from(document.getElementById('pesos-inputs').querySelectorAll('input'));

    const nums = [];
    const numsx = [];
    let sumaPonderada = 0;
    let sumaPesos = 0;

    for (let i = 0; i < numeroInputs.length; i++) {
      const numero = parseFloat(numeroInputs[i].value);
      const numx = parseFloat(pesoInputs[i].value);

      nums.push(numero);
      numsx.push(numx);

      sumaPonderada += numero * numx;
      sumaPesos += numx;
    }

    const promedioPonderado = sumaPonderada / sumaPesos;

    setResultados({ numeros: nums.join(', '), numsx: numsx.join(', '), promedioPonderado });
  };

  return (
    <div className="col p-3 border border-secondary rounded-3">
      <p className="h2 text-info fw-light fst-italic">EXERCISE 4</p>
      <p className="lead fw-light fst-italic">
        <small>Hallar el promedio ponderado de n números.</small>
      </p>
      <p className="h4 fw-light fst-italic">Ingrese la cantidad de números:</p>
      <div className="p-3">
        <input
          type="number"
          className="form-control fw-light fst-italic"
          placeholder="...."
          value={numInputs}
          onChange={(e) => setNumInputs(e.target.value)}
        />
      </div>
      <div id="numeros-inputs">{generateInputs()?.numeroInputs}</div>
      <div id="pesos-inputs">{generateInputs()?.pesoInputs}</div>
      <div id="inputs-container">
        <button className="btn btn-outline-info fw-light fst-italic" onClick={handleCalculate}>
          Calcular
        </button>
      </div>
      <p className="h3 fw-light fst-italic">Los números ingresados son: {resultados.numeros}</p>
      <p className="h3 fw-light fst-italic">Los pesos ingresados son: {resultados.numsx}</p>
      <p className="h3 fw-light fst-italic">El promedio ponderado es: {resultados.promedioPonderado}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 p-1">
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
      </div>
    </div>
  );
}

export default App;