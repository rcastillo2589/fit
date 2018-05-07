import { Component } from 'inferno';

const MALE = "male";
const FEMALE = "female";

class BodyFatCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInsert: true,
      gender: "male",
      age: 18,
      chest: 0,
      abs: 0,
      tricep: 0, 
      suprailiac: 0,
      thigh: 0
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateBodyFat = this.calculateBodyFat.bind(this);
    this.calculateMensBodyFat = this.calculateMensBodyFat.bind(this);
    this.calculateWomensBodyFat = this.calculateWomensBodyFat.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(event) {
    this.setState({
      isInsert: true
    });
  }

  handleSelectChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      gender: value
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: parseInt(value, 10)
    });
  }

  handleSubmit(event) {
    this.setState({
      isInsert: false
    });
  }

  getGenderMeasurements() {
    return this.state.gender === MALE ?
    (
      <div>
        <h3>Caliper Measurements in MM</h3>
        <label>
          Chest:
          <input 
            name="chest" 
            type="number" 
            value={this.state.chest} 
            onInput={this.handleInputChange} />
        </label>
        <label>
          Abs:
          <input 
            name="abs" 
            type="number" 
            value={this.state.abs} 
            onInput={this.handleInputChange} />
        </label>
        <label>
          Thigh:
          <input 
            name="thigh" 
            type="number" 
            value={this.state.thigh} 
            onInput={this.handleInputChange} />
        </label>
      </div>
    ) : (
      <div>
        <h3>Caliper Measurements in MM</h3>
        <label>
          Tricep:
          <input 
            name="tricep" 
            type="number" 
            value={this.state.tricep} 
            onInput={this.handleInputChange} />
        </label>
        <label>
          Suprailiac:
          <input 
            name="suprailiac" 
            type="number" 
            value={this.state.suprailiac} 
            onInput={this.handleInputChange} />
        </label>
        <label>
          Thigh:
          <input 
            name="thigh" 
            type="number" 
            value={this.state.thigh} 
            onInput={this.handleInputChange} />
        </label>
      </div>
    );
  }

  calculateBodyFat() {
    if(this.state.gender === MALE) {
      return this.calculateMensBodyFat(
        this.state.age,
        this.state.chest,
        this.state.abs,
        this.state.thigh
      )
    } else {
      return this.calculateWomensBodyFat(
        this.state.age,
        this.state.tricep,
        this.state.suprailiac,
        this.state.thigh
      );
    }
  }

  /**
   * Calculate mens body fat
   * @param {number} chest in mm 
   * @param {number} abs in mm
   * @param {number} thigh in mm
   */
  calculateMensBodyFat(age, chest, abs, thigh) {
    let bodyDensity = this.calcuateMensBodyDensity(age, chest, abs, thigh);
    return this.convertToBodyFatPercent(bodyDensity);
  }

  /**
   * Calculate body density using Jackson-Pollock formula
   * @param {*} age 
   * @param {*} chest 
   * @param {*} abs 
   * @param {*} thigh 
   */
  calcuateMensBodyDensity(age, chest, abs, thigh) {
    let measurementsSum = chest + abs + thigh;
    return 1.10938 - 
      (0.0008267 * measurementsSum) + 
      (0.0000016 * Math.pow(measurementsSum, 2)) -
      (0.0002574 * age);
  }

   /**
   * Calculate womens body fat
   * @param {*} age 
   * @param {*} tricep 
   * @param {*} suprailiac 
   * @param {*} thigh 
   */
  calculateWomensBodyFat(age, tricep, suprailiac, thigh) {
    let bodyDensity = this.calculateWomensBodyDensity(age, tricep, suprailiac, thigh);
    return this.convertToBodyFatPercent(bodyDensity);
  }

  /**
   * Calculate body density using Jackson-Pollock-Ward formula
   * @param {*} age 
   * @param {*} tricep 
   * @param {*} suprailiac 
   * @param {*} thigh 
   */
  calculateWomensBodyDensity(age, tricep, suprailiac, thigh) {
    let measurementsSum = tricep + suprailiac + thigh;
    return 1.0994921 -
      (0.0009929 * measurementsSum) +
      (0.0000023 * Math.pow(measurementsSum, 2)) -
      (0.0001392 * age);
  }

  /**
   * Convert to bodyfat using Siri formula
   * @param {*} bodyDensity 
   */
  convertToBodyFatPercent(bodyDensity) {
    return Math.ceil(((4.95 / bodyDensity) - 4.5) * 100);
  }

  render() { 
    return this.state.isInsert ? (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.gender} onInput={this.handleSelectChange}>
            <option value={MALE}>Male</option>
            <option value={FEMALE}>Female</option>
          </select>
        </label>
        <label>
          Age:
          <input 
            name="age" 
            type="number" 
            value={this.state.age} 
            onInput={this.handleInputChange} />
        </label>
        {this.getGenderMeasurements()}
        <input type="submit" value="Calculate" />
      </form>
    ) : (
      <div>
        <h3>Results: {this.calculateBodyFat()} %</h3>
        <button onClick={this.reset}>Redo</button>
      </div>
    );
  }
}

export default BodyFatCalc;
