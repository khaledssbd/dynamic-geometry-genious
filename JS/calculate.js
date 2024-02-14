/**
 ** Onjective: Get base & height of a triangle. Calculate the area by using the provided formula. And then display the area.
 ** step-1: get base value of the triangle
 ** step-2: added an id in the base input field
 ** step-3: use getElementId to access the input field
 ** step-4: get value from the input field. (value is string now)
 ** step-5: convert the string value to number using parseFloat.
 */

//! ----------------------------- Fully Dynamic Way --------------------
//* 1. --> Triangle
function calculateTriangleArea() {
  const triangleBase = getInputValueById('triangle-base');
  const triangleHeight = getInputValueById('triangle-height');
  const area = 0.5 * triangleBase * triangleHeight;
  return setInnerTextById('triangle-area', area);
}

//* 2. --> Rectangle
function calculateRectangleArea() {
  const rectangleWidth = getInputValueById('rectangle-width');
  const rectangleLength = getInputValueById('rectangle-length');
  const area = rectangleWidth * rectangleLength;
  return setInnerTextById('rectangle-area', area);
}

//* 3. --> Parallelogram
function calculateParallelogramArea() {
  const parallelogramBase = getInputValueById('parallelogram-base');
  const parallelogramHeight = getInputValueById('parallelogram-height');
  area = parallelogramBase * parallelogramHeight;
  return setInnerTextById('parallelogram-area', area);
}

//* 4. --> Rhombus
function calculateRhombusArea() {
  const rhombusD1 = getInputValueById('rhombus-d₁');
  const rhombusD2 = getInputValueById('rhombus-d₂');
  const area = 0.5 * rhombusD1 * rhombusD2;
  return setInnerTextById('rhombus-area', area);
}

//* 5. --> Pentagon
function calculatePentagonArea() {
  const pentagonP = getInputValueById('pentagon-p');
  const pentagonB = getInputValueById('pentagon-b');
  const area = 0.5 * pentagonP * pentagonB;
  return setInnerTextById('pentagon-area', area);
}

//* 6. --> Ellipse
function calculateEllipseArea() {
  const ellipseA = getInputValueById('ellipse-a');
  const ellipseB = getInputValueById('ellipse-b');
  area = Math.PI * ellipseA * ellipseB;
  return setInnerTextById('ellipse-area', area);
}

//! ------------------------------ Main functions -------------------------------------
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const input = parseFloat(inputText);
  return input;
}

function setInnerTextById(elementId, area) {
  const inputAreaSpan = document.getElementById(elementId);

  if (Number.isNaN(area)) {
    inputAreaSpan.innerText = 'Please provide number value in cm';
  } else {
    inputAreaSpan.innerText = area + '' + 'cm²';
  }
}
