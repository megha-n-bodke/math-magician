import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  // set state using useState hook
  const [state, setState] = useState({
    toal: 0,
    operation: null,
    next: null,
  });
  const { total, operation, next } = state;
  const clickHandler = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };
  return (
    <div className="calciPage">
      <p className="calciPara">Lets Do Some Math!!</p>
      <div className="calculator-container">
        <table className="calculator">
          <tr className="answer-row">
            <td colSpan="4">
              {total}
              {operation}
              {next}
            </td>
          </tr>

          <tr>
            <td onClick={clickHandler}>AC</td>
            <td onClick={clickHandler}>+/-</td>
            <td onClick={clickHandler}>%</td>
            <td className="operator-column" onClick={clickHandler}>
              &#247;
            </td>
          </tr>

          <tr>
            <td onClick={clickHandler}>7</td>
            <td onClick={clickHandler}>8</td>
            <td onClick={clickHandler}>9</td>
            <td className="operator-column" onClick={clickHandler}>
              x
            </td>
          </tr>

          <tr>
            <td onClick={clickHandler}>4</td>
            <td onClick={clickHandler}>5</td>
            <td onClick={clickHandler}>6</td>
            <td className="operator-column" onClick={clickHandler}>
              -
            </td>
          </tr>

          <tr>
            <td onClick={clickHandler}>1</td>
            <td onClick={clickHandler}>2</td>
            <td onClick={clickHandler}>3</td>
            <td className="operator-column" onClick={clickHandler}>
              +
            </td>
          </tr>

          <tr>
            <td colSpan={2} onClick={clickHandler}>
              0
            </td>

            <td onClick={clickHandler}>.</td>
            <td className="operator-column" onClick={clickHandler}>
              =
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
