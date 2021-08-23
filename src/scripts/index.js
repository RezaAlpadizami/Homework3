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
const fromSelect = document.querySelector("#from");
const toSelect = document.querySelector("#to");
const result = document.querySelector("#result");
const input = document.querySelector("#inputNumber");
const bgColor = document.querySelector("#input-color");

const convert = new Convert();

function conv() {
  if (fromSelect.value == "cel") {
    const res = convert.fromCelcius(toSelect.value, parseInt(input.value));
    result.value = res;
  }
  if (fromSelect.value == "rea") {
    const res = convert.fromReamur(toSelect.value, parseInt(input.value));
    result.value = res;
  }
  if (fromSelect.value == "far") {
    const res = convert.fromFarenheit(toSelect.value, parseInt(input.value));
    result.value = res;
  }
}

function change() {
  document.body.style.backgroundColor = bgColor.value;
}
