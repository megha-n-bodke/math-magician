import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <table className="calculator">
          <tr className="answer-row">
            <td colSpan="4">0</td>
          </tr>

          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td className="operator-column">&#247;</td>
          </tr>

          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className="operator-column">&#215;</td>
          </tr>

          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className="operator-column">-</td>
          </tr>

          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="operator-column">+</td>
          </tr>

          <tr>
            <td colSpan={2}>0</td>

            <td>.</td>
            <td className="operator-column">=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
