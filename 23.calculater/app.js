document.getElementById("btn").addEventListener("click", function () {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let oprator = document.getElementById("selectop").value;

  switch (oprator) {
    case "plus":
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case "sub":
      result.innerHTML = Number(num1) - Number(num2);
      break;
    case "division":
      result.innerHTML = Number(num1) / Number(num2);
      break;
    case "multi":
      result.innerHTML = Number(num1) * Number(num2);
      break;
  }
});
