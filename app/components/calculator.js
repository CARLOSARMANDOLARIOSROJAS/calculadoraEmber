import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalculatorComponent extends Component {
  @tracked operand1 = 0;
  @tracked operand2 = 0;
  @tracked result = 0;

  @action
  updateOperand1(event) {
    this.operand1 = parseFloat(event.target.value);
  }

  @action
  updateOperand2(event) {
    this.operand2 = parseFloat(event.target.value);
  }

  @action
  sum() {
    this.result = this.operand1 + this.operand2;
  }

  @action
  subtract() {
    this.result = this.operand1 - this.operand2;
  }

  @action
  multiply() {
    this.result = this.operand1 * this.operand2;
  }
  @action
  divide() {
    if (this.operand2 !== 0) {
      this.result = this.operand1 / this.operand2;
    } else {
      alert('Error: División por cero');
    }
  }
}
