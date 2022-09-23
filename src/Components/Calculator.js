import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { total: 0, operation: null, next: null };
  }

  clickHandler = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
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
            <td onClick={this.clickHandler}>AC</td>
            <td onClick={this.clickHandler}>+/-</td>
            <td onClick={this.clickHandler}>%</td>
            <td className="operator-column" onClick={this.clickHandler}>
              &#247;
            </td>
          </tr>

          <tr>
            <td onClick={this.clickHandler}>7</td>
            <td onClick={this.clickHandler}>8</td>
            <td onClick={this.clickHandler}>9</td>
            <td className="operator-column" onClick={this.clickHandler}>
              x
            </td>
          </tr>

          <tr>
            <td onClick={this.clickHandler}>4</td>
            <td onClick={this.clickHandler}>5</td>
            <td onClick={this.clickHandler}>6</td>
            <td className="operator-column" onClick={this.clickHandler}>
              -
            </td>
          </tr>

          <tr>
            <td onClick={this.clickHandler}>1</td>
            <td onClick={this.clickHandler}>2</td>
            <td onClick={this.clickHandler}>3</td>
            <td className="operator-column" onClick={this.clickHandler}>
              +
            </td>
          </tr>

          <tr>
            <td colSpan={2} onClick={this.clickHandler}>
              0
            </td>

            <td onClick={this.clickHandler}>.</td>
            <td className="operator-column" onClick={this.clickHandler}>
              =
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
