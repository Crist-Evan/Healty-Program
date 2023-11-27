document.getElementById("submitButton").onclick = function () {
  let tinggiBadan = document.getElementById("dataInput1").value;
  let beratBadan = document.getElementById("dataInput2").value;

  let imt = Math.round(beratBadan / (tinggiBadan / 100) ** 2);
  if (imt < 0) {
    document.getElementById("output").innerHTML = "IMT: NaN";
  } else {
    document.getElementById("output").innerHTML = "IMT: " + imt;
  }
};
