let usia;
let tinggiBadan;
let beratBadan;
let bmr;

document.getElementById("hitung").onclick = function () {
  if (document.getElementById("pria").checked) {
    usia = document.getElementById("input1").value;
    tinggiBadan = document.getElementById("input2").value;
    beratBadan = document.getElementById("input3").value;
    bmr = 66.5 + 13.7 * beratBadan + 5 * tinggiBadan - 6.8 * usia;
  } else if (document.getElementById("wanita").checked) {
    usia = document.getElementById("input1").value;
    tinggiBadan = document.getElementById("input2").value;
    beratBadan = document.getElementById("input3").value;
    bmr = 655 + 9.6 * beratBadan + 1.8 * tinggiBadan - 4.7 * usia;
  } else {
    bmr = 0;
  }

  if (document.getElementById("kegiatan1").checked) {
    bmr = Math.round(bmr * 1.2);
  } else if (document.getElementById("kegiatan2").checked) {
    bmr = Math.round(bmr * 1.3);
  } else if (document.getElementById("kegiatan3").checked) {
    bmr = Math.round(bmr * 1.4);
  } else {
    bmr = 0;
  }

  let a = Math.round(bmr * 0.86);
  let b = Math.round(bmr * 0.73);
  let c = Math.round(bmr * 0.46);

  if (usia <= 0 && tinggiBadan <= 0 && beratBadan <= 0) {
    document.getElementById("output").innerHTML = `KEBUTUHAN X KALORI / HARI`;
    document.getElementById(
      "pre1"
    ).innerHTML = `penurunan mudah      = X kalori`;
    document.getElementById(
      "pre2"
    ).innerHTML = `penurunan normal     = X kalori`;
    document.getElementById(
      "pre3"
    ).innerHTML = `penurunan ekstrim    = X kalori`;
  } else {
    document.getElementById(
      "pre1"
    ).innerHTML = `penurunan mudah      = ${a} kalori`;
    document.getElementById(
      "pre2"
    ).innerHTML = `penurunan normal     = ${b} kalori`;
    document.getElementById(
      "pre3"
    ).innerHTML = `penurunan ekstrim    = ${c} kalori`;
    document.getElementById(
      "output"
    ).innerHTML = `KEBUTUHAN ${bmr} KALORI / HARI`;
  }
};
