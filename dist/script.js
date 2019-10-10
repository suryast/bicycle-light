const ledStates = [
{ name: "modeOne",
  state: ["high-beam", "high-beam", "high-beam", "high-beam"] },

{ name: "modeTwo",
  state: ["low-beam", "low-beam", "low-beam", "low-beam"] },

{ name: "modeThree",
  state: ["high-beam shine", "high-beam shine", "high-beam shine", "high-beam shine"] },

{ name: "modeFour",
  state: ["low-beam alter-two", "low-beam alter-one", "low-beam alter-one", "low-beam alter-two"] },

{ name: "modeFive",
  state: ["low-beam alter-one", "low-beam alter-two", "low-beam alter-two", "low-beam alter-one"] }];



function modeOne(arr) {
  // Remove current state
  const grid = document.querySelector(".grid");
  grid.innerHTML = ``;

  // Read js object for state
  const currentLedStates = ledStates.find(key => key.name == 'modeOne').state.map(key => `<div class='${key}'></div>`);

  // Create markup
  let markup = ``;
  currentLedStates.map(child => markup += child);
  grid.innerHTML += markup;

  // Re-enable event listeners
  init();
}

function modeTwo(arr) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ``;

  // Read js object for state
  const currentLedStates = ledStates.find(key => key.name == 'modeTwo').state.map(key => `<div class='${key}'></div>`);

  // Create markup
  let markup = ``;
  currentLedStates.map(child => markup += child);
  grid.innerHTML += markup;

  init();
}

function modeThree(arr) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ``;

  // Read js object for state
  const currentLedStates = ledStates.find(key => key.name == 'modeThree').state.map(key => `<div class='${key}'></div>`);

  // Create markup
  let markup = ``;
  currentLedStates.map(child => markup += child);
  grid.innerHTML += markup;

  init();
}

function modeFour(arr) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ``;

  // Read js object for state
  const currentLedStates = ledStates.find(key => key.name == 'modeFour').state.map(key => `<div class='${key}'></div>`);

  // Create markup
  let markup = ``;
  currentLedStates.map(child => markup += child);
  grid.innerHTML += markup;

  init();
}

function modeFive(arr) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ``;

  // Read js object for state
  const currentLedStates = ledStates.find(key => key.name == 'modeFive').state.map(key => `<div class='${key}'></div>`);

  // Create markup
  let markup = ``;
  currentLedStates.map(child => markup += child);
  grid.innerHTML += markup;

  init();
}

function reset(arr) {
  initialState();
  init();
}

function init() {
  document.getElementById("one").addEventListener("click", modeOne);
  document.getElementById("two").addEventListener("click", modeTwo);
  document.getElementById("three").addEventListener("click", modeThree);
  document.getElementById("four").addEventListener("click", modeFour);
  document.getElementById("five").addEventListener("click", modeFive);
  document.getElementById("reset").addEventListener("click", reset);
}

function initialState() {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ``;

  const innerLED = `<div class="low-beam off"></div>\
      <div class="low-beam off"></div>\
      <div class="low-beam off"></div>\
      <div class="low-beam off"></div>`;
  grid.innerHTML += innerLED;
}

initialState();
init();