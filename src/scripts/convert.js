class Convert {
  constructor() {}
  fromCelcius(to, inputNumber) {
    if (to == "cel") {
      return inputNumber;
    }
    if (to == "rea") {
      return (4 / 5) * inputNumber;
    }
    if (to == "far") {
      return (9 / 5) * inputNumber + 32;
    }
  }

  fromReamur(to, inputNumber) {
    if (to == "rea") {
      return inputNumber;
    }
    if (to == "cel") {
      return (5 / 4) * inputNumber;
    }
    if (to == "far") {
      return (9 / 4) * inputNumber + 32;
    }
  }

  fromFarenheit(to, inputNumber) {
    if (to == "far") {
      return inputNumber;
    }
    if (to == "cel") {
      return (5 / 9) * (inputNumber - 32);
    }
    if (to == "rea") {
      return (4 / 9) * (inputNumber - 32);
    }
  }
}

module.exports = {
  Convert,
};
