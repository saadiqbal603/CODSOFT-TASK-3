let display = document.getElementById("display");
let expression = "";

// display.addEventListener("keydown", (e) => {
//   console.log({ e });
//   //   debugger;
//   if (e.key == "Shift" || e.key == "Backspace") {
//     e.key = "";
//   } else {
//     expression = e.key;
//     // appendtoDisplay(e.key);
//     console.log(e.key);
//   }
// });

display.addEventListener("keydown", (e) => {
  // debugger;
  e.preventDefault();
  if (
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "0" ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "/" ||
    e.key == "*"
  ) {
    appendtoDisplay(e.key);
  } else if (e.key == "Backspace") {
    canceldigit();
  } else if (e.key == "Shift") {
    e.key == "";
  } else if (e.key == "Enter") {
    calculateResult();
  } else if (e.key == "F5") {
    display.value = "";
    expression = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Expression Use Only (0-9) (+-/*)",
    });
    display.value = "";
    expression = "";
  }
});

function appendtoDisplay(number) {
  //   var lastChar = display.value.substr(display.length - 1);
  //   console.log(lastChar);
  //   let laststr = expression.slice(-1);
  //   console.log(laststr);
  //   const operators = "+-/*";
  //   if (operators.includes(laststr) && operators.includes(number)) {
  //     alert("hello");
  //     return;
  //   }
  expression += number;
  display.value = expression;
}

function calculateResult() {
  try {
    let result = eval(expression);
    expression = "";
    appendtoDisplay(result);
  } catch (err) {
    // alert("Invalid expression");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Expression!",
    });
    expression = "";
    display.value = "";
  }
}
function clearDisplay() {
  display.value = "";
  expression = "";
}
function canceldigit() {
  expression = expression.slice(0, -1);
  display.value = expression;
}
